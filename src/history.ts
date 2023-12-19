import { ensureFile } from "https://deno.land/std@0.209.0/fs/ensure_file.ts";

import { SAVE_FILE_NAME } from "./config/config.ts";
import { Logger } from "./logger.ts";

type PriceHistory = {
    name: string;
    price: number;
    date: Date;
};

const logger = new Logger("[HISTORY]");

export class History {
    private static _instance: History;

    private history: PriceHistory[];

    constructor() {
        logger.log("Initialized history class.");

        this.history = [];

        ensureFile(`./${SAVE_FILE_NAME}`).then(() => {
            logger.log("Created save file.");

            const loadedFile = Deno.readTextFileSync(`./${SAVE_FILE_NAME}`);

            if (!loadedFile) return;
            const oldHistory = JSON.parse(loadedFile);

            logger.log("Loaded old history.");
            this.history = oldHistory;
        });
    }

    public push({ name, price, date }: PriceHistory) {
        this.history.push({ name, price, date });
        ensureFile(`./${SAVE_FILE_NAME}`).then(() =>
            Deno.writeTextFileSync(
                `./${SAVE_FILE_NAME}`,
                JSON.stringify(this.history)
            )
        );
    }

    public getHistory() {
        return this.history;
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }
}
