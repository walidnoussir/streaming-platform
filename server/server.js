import mongoose from "mongoose";
import ENV from "./src/config/dotenv.js";
import { app } from "./app.js";

const port = ENV.PORT || 5000;

try {
  await mongoose.connect(ENV.MONGO_URL);

  app.listen(port, () => {
    console.log(`server running... `);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
