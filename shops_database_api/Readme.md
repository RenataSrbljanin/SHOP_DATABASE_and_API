
# Store API

A REST API for managing stores, items, and tags.

## Local Setup

1. Clone the repo
2. Run `npm install`
3. Ensure PostgreSQL is running and database `storedb` is created
4. Run `npm run dev`

## Endpoints

### STORES
- GET `/stores` – Dohvati sve trgovine (uključuje artikle i oznake)
- GET `/stores/:id` – Dohvati trgovinu po ID-u
- POST `/stores` – Dodaj trgovinu
- PUT `/stores/:id` – Ažuriraj trgovinu
- DELETE `/stores/:id` – Obriši trgovinu

### ITEMS
- GET `/items` – Dohvati sve artikle (uključuje trgovinu i oznake)
- GET `/items/:id` – Dohvati artikl po ID-u
- POST `/items` – Dodaj artikl
- PUT `/items/:id` – Ažuriraj artikl
- DELETE `/items/:id` – Obriši artikl

### TAGS
- GET `/tags`
- POST `/tags`

