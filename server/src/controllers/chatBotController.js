import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const chatWithAi = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      process.env.HUGGINGFACE_API_URL,
      {
        inputs: message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ success: true, response: response.data });
  } catch (err) {
    console.error(
      "Error with HuggingFace API:",
      err.response?.data || err.message
    );
    res.status(500).json({ success: false, message: "AI request failed" });
  }
};
