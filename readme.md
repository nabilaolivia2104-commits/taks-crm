# Logic CRM

hallo ini adalah taks crm yang kita buat untuk menyelesaikan tes di trivgoo.
saya buat ini memudahankan orang yang igin menggunakan codingan ini paham dengan apa yang saya buat
harapan saya kedepannya kode ini di kembangkan agar menjadi lebih baik.

# instalasi

## 1.clone github

langkah awal yang perlu anda lakukkan, cloning github ini untuk bisa melihat struktur
kode ini berupa file dan folder.

```
https://github.com/nabilaolivia2104-commits/taks-crm.git
```

## install depedensi

selanjutnya dalam package.json tersebut terdapat depensi yang di butuhkan kode ini. anda dapat melihatnya pada pada kolom di bawah daftar depedensi yang di butuhkan kode ini

```
  "dependencies": {
    "cors": "^2.8.6",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "mysql2": "^3.16.3"
  }
```

untuk melakukkan instalasi anda cukup menjalankan :

```
npm install
```

maka semua depedensi yang di daftar tersebut akan otomatis terinstall dalam folder node_modules.
dan tahap instalasi sudah selesai. selanjutnya jalanakan server kode dengan cara:

```
npm run dev
```

artinya kita menjalankan printah key pada script package.json dengan dev yang di intialisasikan
untuk menajalan printah "nodemon src/app.js". anda dapat melihat sendiri pada file package.json
dan dapat merubahnya sesuai dengan yang anda mau.

# Rest Api

selanjutnya setelah struktur kode berhasilkita aja melakukkan pengujian rest API.

<hr>
Base URL:
http://localhost:5000/api

---

## 1. Lead API

### Create Lead

POST /leads

Body (JSON):
{
"lead_code": "TRV-L0001",
"contact_name": "Budi Santoso",
"phone": "08123456789",
"email": "budi@mail.com",
"source": "IG Ads",
"assigned_to": 3,
"tags": "Family",
"package_preference": "3.5 jt / Private"
}

---

### Get All Leads

GET /leads

## Update Deal Stage

PUT /deals/stage

Body (JSON):
{
"deal_id": 1,
"stage_name": "Qualified",
"lost_reason": null
}

## Create Activity

POST /activities

Body (JSON):
{
"lead_id": 1,
"deal_id": 1,
"activity_type": "Call",
"notes": "Follow up pertama",
"activity_date": "2026-01-10 10:00:00",
"created_by": 3
}

## Dashboard KPI

GET /reports/dashboard
