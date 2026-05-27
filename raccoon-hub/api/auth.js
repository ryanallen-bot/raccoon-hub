let users_db = {}; // In-memory database mock

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { u, p, type } = req.body;
    if (type === 'reg') {
      if (users_db[u]) return res.json({ success: false, msg: "Taken!" });
      users_db[u] = p;
      return res.json({ success: true });
    }
    return (users_db[u] && users_db[u] === p) 
      ? res.json({ success: true }) 
      : res.json({ success: false, msg: "Invalid!" });
  }
  res.status(405).end();
}
