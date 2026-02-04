const db = require("../config/db");

exports.dashboard = async (req, res) => {
  const [[leads]] = await db.query("SELECT COUNT(*) total FROM leads");
  const [[won]] = await db.query(`
    SELECT COUNT(*) total
    FROM deals d
    JOIN deal_stages s ON d.stage_id=s.id
    WHERE s.name='Won'
  `);
  const [[revenue]] = await db.query(
    "SELECT IFNULL(SUM(amount),0) total FROM revenues",
  );

  res.json({
    totalLeads: leads.total,
    dealsWon: won.total,
    actualRevenue: revenue.total,
  });
};
