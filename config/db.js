// import mongoose from "mongoose";
// import colors from "colors";
// const connectDB = async ()=>{
//     try {
//         const conn = mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})
//         console.log(`Connected to MongoDB databse!`)
//     } catch (error) {
//         console.log(`Error in database connection ${error}`.bgRed.white)
//     }
// }

// export default connectDB;

import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    let dbpassword = encodeURIComponent('xxxxxxxx');
    const dbo = 'xxxx_xxx';
    let authMechanism = 'DEFAULT';
    const conn = await mongoose.connect(`mongodb connection string`);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;
