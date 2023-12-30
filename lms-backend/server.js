import { config } from "dotenv";
config();
import app from "./app.js";
import ConnectMDB from "./config/dbconfig.js";
const PORT =process.env.PORT || 4044;

app.listen(PORT, async() => {
  await ConnectMDB();
  console.log(`Your Port is running on http://localhost:${PORT}`);
});
