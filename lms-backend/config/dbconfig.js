import mongoose from "mongoose";

mongoose.set("strict", false);

const ConnectMDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL);

    if (connection) {
      console.log(`Database is connected ${connection.host}`);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default ConnectMDB;
