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
    let dbpassword = encodeURIComponent('AntyaFMS@2019');
    const dbo = 'shoyeb_test';
    let authMechanism = 'DEFAULT';
    const conn = await mongoose.connect(`mongodb://AntyaFMS:${dbpassword}@dev-demo.info:27017/${dbo}?connectTimeoutMS=1000&authSource=admin`);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;