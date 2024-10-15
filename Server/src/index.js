import connDb from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});
console.log(process.env.CORS_ORIGIN);
connDb()
  .then(() => {
    app.listen(3000, () => {
      console.log("connected and listening on specified port");
    });
  })
  .catch((err) => console.log(err));
