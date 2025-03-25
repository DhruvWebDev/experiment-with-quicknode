import { PrismaClient } from "@prisma/client";
import WebSocket from "ws";

const prisma = new PrismaClient();

const ws = new WebSocket("wss://api.devnet.solana.com"); // Solana WebSocket URL

ws.on("open", () => {
  console.log("Connected to Solana WebSocket");

  // Subscribe to account updates
  const subscription = {
    jsonrpc: "2.0",
    id: 1,
    method: "accountSubscribe",
    params: [
      "5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo", // Replace with actual public key
      { commitment: "finalized", encoding: "base64" }
    ]
  };

  ws.send(JSON.stringify(subscription));
});

ws.on("message", async (data) => {
  const message = JSON.parse(data);
  console.log("Received update:", message);

  try {
    await prisma.solanaUpdate.upsert({
      where: { account: "5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo" },
      update: { data: message },
      create: {
        account: "5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo",
        data: message,
      },
    });
    console.log("Data saved to PostgreSQL!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
});

ws.on("close", () => console.log("WebSocket closed"));
ws.on("error", (err) => console.error("WebSocket error:", err));
