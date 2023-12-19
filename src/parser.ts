import {
    DOMParser,
    initParser,
} from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm-noinit.ts";

import { Page } from "./config/config.ts";
import { Logger } from "./logger.ts";
import { History } from "./history.ts";

const logger = new Logger("[PARSER]");

export const getPrices = async (urls: Page[]) => {
    try {
        logger.log("Starter getting new prices...");

        await initParser();

        for (const urlObj of urls) {
            const _price = await parsePrice(urlObj);
        }

        logger.log("Finished getting prices!");
    } catch (err) {
        logger.error(`Error: ${err}`);
    }
};

export const parsePrice = async (urlObj: Page) => {
    try {
        const res = await fetch(urlObj.url);
        const html = await res.text();

        const document = new DOMParser().parseFromString(html, "text/html");
        if (!document) throw new Error("Failed to parse document");

        const priceObject = document.querySelector(urlObj.jsPath);

        if (!priceObject)
            throw new Error(`Failed to find price on page ${urlObj.name}!`);
        const parsedPrice = priceObject.textContent
            .split(",")[0]
            .replace(/\D/g, "");
        const numericPrice = Number(parsedPrice);

        const date = new Date();

        //TODO: Write to file/database
        logger.log(
            `${
                urlObj.name
            }: ${numericPrice} at ${date.toLocaleTimeString()} on ${date.toLocaleDateString()}`
        );

        History.getInstance().push({
            name: urlObj.name,
            price: numericPrice,
            date,
        });
        return numericPrice;
    } catch (err) {
        logger.error(`Error: ${err}`);
        return null;
    }
};
