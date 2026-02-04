require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const leadRoutes = require("./routes/lead.routes");
const dealRoutes = require("./routes/deal.routes");
const activityRoutes = require("./routes/activity.routes");
const reportRoutes = require("./routes/report.routes");

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/reports", reportRoutes);

app.listen(process.env.PORT, () => {
  console.log("CRM backend running on port " + process.env.PORT);
});
