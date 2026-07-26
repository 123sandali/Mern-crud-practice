import express from "express"
import notesRoutes from "./routes/notes.route.js"
import rateLimiter from "../middleware/rateLimiter.js";
import cors from "cors"
import path from "node:path";

const __dirname=path.resolve()

const app= express();
//middleware
app.use(express.json());
if(process.env.NODE_ENV !== "production"){
app.use(cors(
    {origin:"http://localhost:5173",}
))
}
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);
if(process.env.NODE_ENV == "production"){
app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get("*",(req,res)=> {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));})

}


export default app;
