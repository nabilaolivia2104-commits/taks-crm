# 📘 Dokumentasi Teknis – Backend CRM

## 1. Arsitektur Sistem

Backend menggunakan arsitektur REST API berbasis Express.js.
Client (Postman / Frontend) → Controller → Service → Database (MySQL)

## 2. Struktur Folder

src/
├── app.js
├── config/
│ └── database.js
├── routes/
│ ├── lead.routes.js
│ ├── deal.routes.js
│ ├── activity.routes.js
│ └── report.routes.js
├── controllers/
├── services/
└── models/

## 3. Database Schema

- users
- leads
- deals
- activities
- deal_stages

(Relasi dijelaskan di bawah)

## 4. Flow CRM

Lead → Deal → Activity → Reporting

## 5. Reporting KPI

- Total Leads
- Conversion Rate
- Revenue
