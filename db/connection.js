import mongoose from "mongoose"

mongoose.set("returnOriginal", false);

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect('mongodb://127.0.0.1:27017/mtg', config)
  .catch((error) => console.error(error))

const db = mongoose.connection

db.on('connected', () => console.log("connected to db"))
db.on('disconnected', () => console.log("disconnected from db"))
db.on('error', (error) => console.error("error: ", error))

export default db