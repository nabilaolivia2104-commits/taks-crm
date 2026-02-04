# Logic CRM – Trivgoo Technical Test

Repository ini dibuat untuk menyelesaikan **Technical Test CRM Trivgoo**. Project ini berfokus pada pembuatan **backend CRM** menggunakan **Express.js** dan **MySQL**.

Tujuan utama project ini adalah:

- Mengimplementasikan logika dasar sistem CRM
- Menyediakan REST API yang siap diuji menggunakan Postman
- Memudahkan reviewer dan developer lain memahami alur sistem

---

## Teknologi yang Digunakan

- Node.js
- Express.js
- MySQL
- dotenv
- cors

---

## Instalasi

### 1 Import Database Mysql

import database mysql di local database anda dengan file db_crm.sql

### 2 Clone Repository

Clone repository berikut untuk melihat struktur folder dan source code:

```bash
git clone https://github.com/nabilaolivia2104-commits/taks-crm.git
cd taks-crm
```

---

### 3 Install Dependencies

Semua dependency sudah terdaftar di dalam file `package.json`.

Jalankan perintah berikut untuk menginstall seluruh dependency:

```bash
npm install
```

Setelah proses selesai, folder `node_modules` akan otomatis dibuat.

---

### 4 Menjalankan Server

Untuk menjalankan server backend, gunakan perintah:

```bash
npm run dev
```

Perintah ini akan menjalankan:

```bash
nodemon src/app.js
```

Server akan berjalan pada port **5000** (default).

---

## REST API

### Base URL

```
http://localhost:5000/api
```

---

## 1. Lead API

### Create Lead

**POST** `/leads`

Request Body (JSON):

```json
{
  "contact_name": "Budi Santoso",
  "phone": "08123456789",
  "email": "budi@mail.com",
  "source": "IG Ads",
  "assigned_to": 3,
  "tags": "Family",
  "package_preference": "3.5 jt / Private"
}
```

---

### Get All Leads

**GET** `/leads`

---

## 2. Deal / Opportunity

### Update Deal Stage

**PUT** `/deals/stage`

Request Body (JSON):

```json
{
  "deal_id": 1,
  "stage_name": "Qualified",
  "lost_reason": null
}
```

---

## Activity / Tasks

### Create Activity

**POST** `/activities`

Request Body (JSON):

```json
{
  "lead_id": 1,
  "deal_id": 1,
  "activity_type": "Call",
  "notes": "Follow up pertama",
  "activity_date": "2026-01-10 10:00:00",
  "created_by": 3
}
```

---

## Reporting & KPI Dashboard

### Dashboard KPI

**GET** `/reports/dashboard`

API ini digunakan untuk menampilkan ringkasan KPI CRM, seperti:

- Total Leads
- Deals Won
- Conversion Rate
- Revenue Forecast
- Actual Revenue
- Average Deal Value

## Penutup

Project ini dibuat sebagai bagian dari proses tes dan dapat dikembangkan lebih lanjut sesuai kebutuhan bisnis.

## 📘 Dokumentasi Teknis

Dokumentasi teknis backend, database (ERD), dan alur sistem dapat diakses di sini:
!!! [Lihat DOCUMENTATION.md](./DOCUMENTATION.md)
