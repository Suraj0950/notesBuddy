import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const DB_connection = async () => {
    try {
        await mongoose.connect(process.env.Database_URL) 
        console.log("Database Connected Successfully ❤️")   
    } catch (error) {
        console.log("Database Connection Error 💔", error.message)
    }
};

export default DB_connection
 
