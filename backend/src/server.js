import express from "express"
import notesRoutes from "./routes/notes.route.js"
import rateLimiter from "../middleware/rateLimiter.js";
import cors from "cors"

const app= express();
//middleware
app.use(express.json());
app.use(cors(
    {origin:"http://localhost:5173",}
))
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);

export default app;
