import path from "path";
import express, { Express, Request, Response } from "express";

const server = async () => {
    const app: Express = express();

    app.get("/", express.static(path.resolve(__dirname, "../public")));

    app.listen(8888, () => {
        console.log("🚀 Node server running on port 6000");
    });
};

server().catch((err) => {
    console.log(err);
});
