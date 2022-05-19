import express from "express";
import cors from "cors";
import { Socket } from './websocket.mjs';

const app = express();
app.use(cors());

const server = app.listen(1234, () => {
    console.log("Server")}
);

Socket(server);