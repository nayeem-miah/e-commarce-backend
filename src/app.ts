import express, { Request, Response } from "express"
import cors from "cors"
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFount } from "./app/middlewares/notFount";
import router from "./app/routes/route";


const app = express();
app.use(express.json());


app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Welcome to e-commerce backend"
    })
});

// ! global error handler
app.use(globalErrorHandler)

// not fount page
app.use(notFount)
export default app;