const express = require("express");
const app = express();
const puzzles = require("./puzzles.json");

app.use(express.static("public"));

app.get("/lookup/:barcode", (req, res) => {
  const { barcode } = req.params;
  const puzzle = puzzles[barcode];
  if (puzzle) {
    res.json(puzzle);
  } else {
    res.status(404).json({ message: "Puzzle not found" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
