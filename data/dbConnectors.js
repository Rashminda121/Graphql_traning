import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from "lodash";
import casual from "casual";

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

const sequelize = new Sequelize("sqlite::memory:");

const Categories = sequelize.define("categories", {
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});

async function syncAndSeedCategories() {
  try {
    await sequelize.sync({ force: true });
    console.log("SQLite database synced");

    //seeding categories
    // await Promise.all(
    //   _.times(5, () => {
    //     return Categories.create({
    //       category: casual.word,
    //       description: casual.sentence,
    //     });
    //   })
    // );

    // console.log("Categories seeded");
  } catch (error) {
    console.log("Error syncing and seeding categories:", error);
  }
}

syncAndSeedCategories();

export { connectToDatabase, disconnectFromDatabase, Widgets, Categories };
