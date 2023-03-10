import mongoose from "mongoose";
import environVariables from "./environmentalVariable";

const DbUrl = environVariables.MONGODB_STRING_LOCAL;

const Dbconfiging = async () => {
  try {
    const confiling = await mongoose.connect(DbUrl);
    console.log(
      `db is connected to pratical class ${confiling.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default Dbconfiging;
