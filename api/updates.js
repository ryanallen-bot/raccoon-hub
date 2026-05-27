global.admin_updates_log = global.admin_updates_log || [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text, pass } = req.body;
    const MASTER_UPDATE_PASSWORD = "change_this_to_your_password";
    
    if (pass !== MASTER_UPDATE_PASSWORD) {
      return res.json({ success: false, msg: "Incorrect Security Password!" });
    }
    
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);
    global.admin_updates_log.unshift({ message: text, timestamp });
    if (global.admin_updates_log.length > 20) global.admin_updates_log.pop();
    
    return res.json({ success: true });
  } else {
    return res.json(global.admin_updates_log);
  }
}
