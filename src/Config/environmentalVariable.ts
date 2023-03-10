import dotenv from "dotenv";
dotenv.config();

const environVariables = {
  PORT: process.env.PORT as string,
  MONGODB_STRING_LOCAL: process.env.MONGODB_STRING_LOCAL!,
};

export default environVariables;
