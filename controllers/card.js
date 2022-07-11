import Card from "../db/cardSchema.js"

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards)
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getCardNumber = async (req, res) => {
  try {
    const { num } = req.params
    const card = await Card.findOne({ number: num })
    if (card) {
      return res.json(card)
    }
    res.status(404).json({ message: "Card not found!" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const searchText = async (req, res) => {
  try {
    const { query } = req.params
    const card = await Card.find({ text: { $regex: query, $options: "i" } })
    if (card) {
      return res.json(card)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const makeNewCard = async (req, res) => {
  try {
    const card = new Card(req.body)
    await card.save()
    res.status(201).json(card)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateCard = async (req, res) => {
  const { id } = req.params;
  const card = await Card.findOneAndUpdate({ number: id }, req.body)
  res.status(200).json(card)
}

export const deleteCard = async (req, res) => {
  try {
    const { num } = req.params
    const deleted = await Card.find({ number: num })
    if (deleted)
      return res.status(200).send("card deleted")
    throw new Error("card not found")
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}