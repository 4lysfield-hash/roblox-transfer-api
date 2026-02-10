import express from "express"

const app = express()
app.use(express.json())

const players = {}

// Teste rápido
app.get("/", (req, res) => {
  res.send("Transfer API online")
})

app.get("/getPlayerData", (req, res) => {
  const { userId } = req.query
  if (!userId) {
    return res.status(400).json({ error: "userId missing" })
  }

  res.json({
    data: players[userId] || null
  })
})

app.post("/savePlayerData", (req, res) => {
  const { userId, data } = req.body
  if (!userId || !data) {
    return res.status(400).json({ error: "invalid payload" })
  }

  players[userId] = { Data: data }
  res.json({ success: true })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Transfer API running on port", PORT)
})
