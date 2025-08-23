
import mongoose from "mongoose";
import app from "./app";
import { Server } from "http"

let server: Server;
const port = 5000


const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("DB connect....");

        server = app.listen(port, () => {
            console.log(`Server is listening to port http://localhost:${port}`)
        });

    } catch (error) {
        console.log(error);
    }

};

startServer()