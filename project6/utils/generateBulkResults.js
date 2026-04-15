// utils/generateBulkResults.js
import fs from "fs";

const results = [];

for (let i = 1; i <= 100; i++) {
  results.push({
    student: `65f${i.toString().padStart(3, "0")}abc...`,   // 👈 Replace with real Student IDs
    subject: `65g${i.toString().padStart(3, "0")}def...`,   // 👈 Replace with real Subject IDs
    marksObtained: Math.floor(Math.random() * 100),         // Random marks 0–99
    examName: "Final Exam"
  });
}

fs.writeFileSync("bulkResults.json", JSON.stringify({ results }, null, 2));
console.log("✅ bulkResults.json created with 100 entries");
