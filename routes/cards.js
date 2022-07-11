import { Router } from "express"
import * as controllers from "../controllers/card.js"

const router = Router()

router.get("/cards", controllers.getAllCards)
router.get("/cards/o=:query", controllers.searchText)
router.get("/cards/:num", controllers.getCardNumber)
router.post("/cards", controllers.makeNewCard)
router.put("/cards/:id", controllers.updateCard)
router.delete("/cards/:num", controllers.deleteCard)

export default router