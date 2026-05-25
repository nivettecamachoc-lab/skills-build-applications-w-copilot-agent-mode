# OctoFit Tracker

Multi-tier application scaffold: presentation (frontend) + logic (backend) + data (MongoDB).

Quick start (each tier installs/starts separately):

1. Backend

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

2. Frontend

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Notes:
- Backend listens on port `8000` by default (forwarded per repo guidelines).
- Frontend dev server runs on port `5173` and proxies `/api` to the backend.
- Use MongoDB and Mongoose models in `backend/src` when adding the data tier.
