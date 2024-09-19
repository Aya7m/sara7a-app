import { connect } from "mongoose";

export const connectDB=connect("mongodb+srv://sara7aApp:m4r1J7gJne0ydl97@cluster0.mf6ro.mongodb.net/sara7aData222").then(() => {
    console.log("database connected successfully .");
    
}).catch((err) => {
    console.log("error in database .",err);
})