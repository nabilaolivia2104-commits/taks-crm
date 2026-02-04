const db = require("../config/db");

exports.createLead = async (req, res) => {
  const {
    lead_code,
    contact_name,
    phone,
    email,
    source,
    assigned_to,
    tags,
    package_preference,
  } = req.body;

  const [result] = await db.query(
    `INSERT INTO leads
     (lead_code, contact_name, phone, email, source, entry_date, assigned_to, tags, package_preference)
     VALUES (?, ?, ?, ?, ?, CURDATE(), ?, ?, ?)`,
    [
      lead_code,
      contact_name,
      phone,
      email,
      source,
      assigned_to,
      tags,
      package_preference,
    ],
  );

  const [[stage]] = await db.query(
    "SELECT id FROM deal_stages WHERE name='Lead'",
  );

  await db.query("INSERT INTO deals (lead_id, stage_id) VALUES (?, ?)", [
    result.insertId,
    stage.id,
  ]);

  res.json({ message: "Lead created" });
};

exports.getLeads = async (req, res) => {
  const [data] = await db.query(`
    SELECT l.*, u.name AS sales_name
    FROM leads l
    JOIN users u ON l.assigned_to = u.id
    ORDER BY l.created_at DESC
  `);
  res.json(data);
};
