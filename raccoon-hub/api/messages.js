global.chat_history = global.chat_history || [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const obj = req.body;
    global.chat_history.push(obj);
    if (global.chat_history.length > 50) global.chat_history.shift();
    return res.json({ success: true });
  } else {
    const viewer = req.query.viewer;
    const filtered = global.chat_history.filter(m => 
      m.target === 'all' || m.target === viewer || m.user === viewer
    );
    return res.json(filtered);
  }
}
