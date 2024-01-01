import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { config } from "dotenv";
import ConnectMDB from "./config/dbconfig.js";
import userRoutes from "./routes/user.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import courseRoutes from './routes/course.route.js';


config();

const app = express();
ConnectMDB();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //use to track user access url info middlewear [ use to lock info ]

app.use(
  cors({
    // It used to to verfiy the domain is register or not on backedn side
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

/*Creating User Routes */
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);

// if user try to access any other url it show error
app.use('/',(req,res)=>{
  res.send("Server is Running");
})

app.use("*", (req, res) => {
  res.status(404).send("OOPS ! Wrong url request");
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
