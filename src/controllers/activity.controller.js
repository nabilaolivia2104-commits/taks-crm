const db = require("../config/db");

exports.createActivity = async (req, res) => {
  const { lead_id, deal_id, activity_type, notes, activity_date, created_by } =
    req.body;

  await db.query(
    `INSERT INTO activities
     (lead_id, deal_id, activity_type, notes, activity_date, created_by)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [lead_id, deal_id, activity_type, notes, activity_date, created_by],
  );

  res.json({ message: "Activity created" });
};
