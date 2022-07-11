import mongoose from "mongoose"

const Card = mongoose.Schema({
  number: String,
  name: String,
  colors: [String],
  manaCost: String,
  manaValue: Number,
  type: String,
  types: [String],
  subtypes: [String],
  keywords: [String],
  text: String,
  rarity: String,
  artist: String,
  power: String,
  toughness: String,
  loyalty: String
})

export default mongoose.model('cards', Card)