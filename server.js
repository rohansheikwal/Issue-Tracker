const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// In-memory storage
let complaints = [];
let idCounter = 1;

// GET all complaints
app.get("/complaints", (req, res) => {
  res.json(complaints);
});

// GET complaint by ID
app.get("/complaints/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const complaint = complaints.find(c => c.id === id);

  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  res.json(complaint);
});

// POST new complaint
app.post("/complaints", (req, res) => {
  const { name, issue } = req.body;

  const newComplaint = {
    id: idCounter++,
    name,
    issue,
    status: "pending"
  };

  complaints.push(newComplaint);
  res.status(201).json(newComplaint);
});

// PUT update complaint status
app.put("/complaints/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const complaint = complaints.find(c => c.id === id);
  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  complaint.status = status;
  res.json(complaint);
});

// DELETE complaint
app.delete("/complaints/:id", (req, res) => {
  const id = parseInt(req.params.id);
  complaints = complaints.filter(c => c.id !== id);

  res.json({ message: "Complaint deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
