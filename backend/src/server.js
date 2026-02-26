import express from "express";
import helmet from "helmet";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();
const __dirname = path.resolve();




  // Development mode fallback
  app.get("/dashboard", (req, res) => {
    res.send("Hello to dashboard! (Running in Development Mode)");
  });

  if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}


app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});

