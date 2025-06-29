import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/crudoperation", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
}

connectToDatabase();

const widgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  inventory: Number,
  soldout: String,
  stores: Array,
});

const Widgets = mongoose.model("Widgets", widgetSchema);

export { connectToDatabase, disconnectFromDatabase, Widgets };
