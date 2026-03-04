import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API Route for Contact Form
  // This matches the logic in /api/contact.ts for local development
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return res.status(500).json({ error: 'RESEND_API_KEY is not configured in the environment.' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const resend = new Resend(apiKey);
      const data = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'ahmedju430@gmail.com',
        subject: `New Message from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
      
      console.log("Email sent successfully:", data);
      res.status(200).json({ success: true, data });
    } catch (error: any) {
      console.error("Resend API Error:", error);
      res.status(500).json({ error: error.message || 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
