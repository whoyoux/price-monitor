import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Logger } from "./logger.ts";
import { History } from "./history.ts";

const logger = new Logger("[SERVER]");

const app = new Application();

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "Hello world!";
});

router.get("/history", (ctx) => {
    ctx.response.body = History.getInstance().getHistory();
});

app.use(router.routes());
app.use(router.allowedMethods());

const startServer = () => {
    try {
        app.listen({ port: 8000 });
        logger.log("Server started!");
    } catch (err) {
        logger.error(err);
    }
};

export { app, startServer };
