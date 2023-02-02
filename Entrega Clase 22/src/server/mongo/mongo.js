import { connect, set } from "mongoose";

export const connectDB = async () => {
  try {
    set("strictQuery", false);
    await connect("mongodb+srv://luisgagm:Rebellion@cluster0.zeg5t4i.mongodb.net/?retryWrites=true&w=majority", { dbName: "ecommerce" });

    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};