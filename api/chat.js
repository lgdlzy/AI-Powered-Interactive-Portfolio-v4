export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error("DeepSeek Proxy Error:", error);
    res.status(500).json({ error: "Proxy server error" });
  }
}
