//this file is used to connect api to with db

import mongoose from "mongoose";

const database_name = "ntdl_db";
const CONNECTION_URI = "mongodb://localhost:27017/" + database_name;

export const connectToMongo = () => {
    try{
        const connect  = mongoose.connect(CONNECTION_URI)
        if(connect){
            console.log("connection succewsful", CONNECTION_URI)
        }

    }
    catch (error){
        console.log("error")
        console.log()
    }
    

}


