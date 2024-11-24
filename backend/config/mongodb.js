import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Add event listener for successful connection
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connection established successfully!");
    });

    // Add event listener for connection errors
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });

    // Connect to the MongoDB server
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ecommerce", // Use a valid database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectDB;
