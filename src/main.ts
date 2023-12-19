import { Cron } from "https://deno.land/x/croner@8.0.0/dist/croner.js";
import { getPrices } from "./parser.ts";
import { URLS } from "./config/config.ts";
import { startServer } from "./server.ts";

const main = () => {
    console.log("Price Monitor");

    startServer();

    const job = new Cron("*/5 * * * *", () => getPrices(URLS));
    job.trigger();
    // getPrices(URLS);
};

main();
