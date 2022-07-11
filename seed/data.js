import db from "../db/connection.js"
import Card from "../db/cardSchema.js"
import cardsData from "./SNC.json" assert {type: "json"}
const length = cardsData.data.baseSetSize

const insertData = async () => {
  await db.dropDatabase()
  for (let i = 0; i < length; i++) {
    const card = new Card(cardsData.data.cards[i])
    await card.save()
  }
  db.close()
}

insertData()