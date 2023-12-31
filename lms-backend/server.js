import { config } from "dotenv";
config();
import app from "./app.js";
import ConnectMDB from "./config/dbconfig.js";
import {v2} from 'cloudinary'

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const PORT =process.env.PORT || 4044;

app.listen(PORT, async() => {
  await ConnectMDB();
  console.log(`Your Port is running on http://localhost:${PORT}`);
});
