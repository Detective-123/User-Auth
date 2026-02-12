import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import healthCheckRouter from "./routes/heatlhCheck.routes.js";
import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errors.middleware.js";

// routes
app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/auth", userRouter);

app.use(errorHandler);
export { app };
