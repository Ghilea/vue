import express from "express";
import cors from "cors";
import { WebSocketServer } from 'ws';
const app = express();
app.use(cors());
const server = app.listen(1234, () => {console.log("Server")});

newFunction(server)

function newFunction(server){
    const wss = new WebSocketServer({noServer: true, path: "/websocket"});
    const client = new Map();   
    server.on("upgrade", (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (WebSocketServer) => {
            wss.emit("connection", WebSocketServer, request);
            console.log("ny anslutning");
            client.set(WebSocketServer);
        }) 
    });
    wss.on("connection", (webbsocketConnection, connectionrequest) => {
        webbsocketConnection.on("message", message => {
            const parsedMessage = JSON.parse(message);
            console.log(parsedMessage);
            [...client.keys()].forEach(client => {
                client.send(JSON.stringify({message: parsedMessage}))
            })
        })
    });
    return wss;
};