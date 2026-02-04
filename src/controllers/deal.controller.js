const db = require("../config/db");

exports.updateStage = async (req, res) => {
  const { deal_id, stage_name, lost_reason } = req.body;

  const [[stage]] = await db.query("SELECT id FROM deal_stages WHERE name=?", [
    stage_name,
  ]);

  await db.query("UPDATE deals SET stage_id=?, lost_reason=? WHERE id=?", [
    stage.id,
    lost_reason || null,
    deal_id,
  ]);

  res.json({ message: "Deal stage updated" });
};
