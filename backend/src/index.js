import dotenv from "dotenv";

import dns from "node:dns";
import connectDB from "./config/database.js";
import app from "./server.js";

dns.setServers(["8.8.8.8","1.1.1.1"])

dotenv.config({
    path:'./.env'
});

const startServer = async()=>{
    try{
        await connectDB();
        app.on("error",(error)=>{
            console.log(error);
            throw error;
        });
        const port = process.env.PORT || 8000;
        app.listen(port,()=>{
        console.log(`server started on port :${port}`);
        })
    }
    catch(error){
        console.log(error)
    }
}

startServer();