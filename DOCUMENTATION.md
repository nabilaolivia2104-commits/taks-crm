# 📘 Dokumentasi Teknis – Backend CRM

## 1. Arsitektur Sistem

Backend menggunakan arsitektur REST API berbasis Express.js.
Client (Postman / Frontend) → Controller → Service → Database (MySQL)

## 2. Struktur Folder

<img src="/assets/struktur.png" alt/>

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
