import { config } from "dotenv";
config();
import app from "./app.js";
var PORT =process.env.PORT || 4044;

app.listen(PORT, () => {
  console.log(`Your Port is running on http://localhost:${PORT}`);
});
