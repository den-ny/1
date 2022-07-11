import { Router } from "express"
import cards from "./cards.js"

const router = Router()
router.get("/",
  (req, res) => res.send(
    `Root page`
  ))

router.use("/", cards)

export default router