const fetch = require('node-fetch');

export default async function handler(req, res) {
  try {
    const promptText = req.query.prompt;
    const response = await fetch("https://text.pollinations.ai/" + encodeURIComponent(promptText));
    const data = await response.text();
    res.send(data);
  } catch(e) {
    res.send("🤖 Raccoon AI is currently experiencing high latency. Try again in a brief second!");
  }
}
