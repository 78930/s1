# Sketu Full Stack Bundle

This bundle contains both parts of the project:

- `mobile-app` — Expo React Native app for Android and iOS
- `backend-api` — Node.js + Express + MongoDB backend API

## Features included

### Mobile app
- Welcome flow
- Login
- Signup for Worker and Factory
- Bottom tabs
- Jobs list
- Job details
- Saved jobs
- Application history
- Talent search
- Factory dashboard
- Candidate pipeline
- Worker profile edit
- Factory profile edit

### Backend
- JWT auth
- Worker and factory registration
- Login
- Auth me
- Worker profile APIs
- Factory profile APIs
- Job posting
- Jobs list and job detail
- Apply to job
- Candidate shortlist
- Candidate hire
- Factory dashboard summary
- Worker application history

## Folder structure

```text
sketu-fullstack-complete/
  mobile-app/
  backend-api/
  README.md
```

## Prerequisites

Install these first:
- Node.js 20+
- npm
- MongoDB local or MongoDB Atlas
- Expo Go on your Android/iPhone, or Android Studio / Xcode simulator

## 1) Run the backend

Open terminal 1:

```bash
cd backend-api
npm install
```

Create env file.

### Windows PowerShell
```powershell
Copy-Item .env.example .env
```

### macOS / Linux
```bash
cp .env.example .env
```

Then edit `.env`.

Example:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/sketu
JWT_SECRET=change-this-super-secret
CLIENT_ORIGIN=*
```

Start backend:

```bash
npm run dev
```

Test:
- Health URL: `http://localhost:5000/health`
- API base URL for mobile: `http://YOUR_COMPUTER_IP:5000`

## 2) Run the mobile app

Open terminal 2:

```bash
cd mobile-app
npm install
```

Create env file.

### Windows PowerShell
```powershell
Copy-Item .env.example .env
```

### macOS / Linux
```bash
cp .env.example .env
```

Edit `.env`:

### Real Android phone or iPhone on same Wi‑Fi
```env
EXPO_PUBLIC_API_BASE_URL=http://YOUR_COMPUTER_IP:5000
```

### Android emulator
```env
EXPO_PUBLIC_API_BASE_URL=http://10.0.2.2:5000
```

### iOS simulator on Mac
```env
EXPO_PUBLIC_API_BASE_URL=http://localhost:5000
```

Start app:

```bash
npx expo start
```

Then press:
- `a` for Android emulator
- `i` for iOS simulator
- or scan the QR code with Expo Go

## 3) Default flow to test

### Worker flow
1. Open app
2. Choose Worker
3. Sign up
4. Browse jobs
5. Open job details
6. Save a job
7. Apply to a job
8. Open Application History
9. Edit profile in Profile tab

### Factory flow
1. Open app
2. Choose Factory
3. Sign up
4. Open Factory tab
5. Post a job
6. Open Candidate Pipeline
7. Shortlist a worker
8. Hire a worker
9. Edit profile in Profile tab

## 4) Important implementation notes

- Mobile app uses Expo Router.
- Backend uses Express + Mongoose + TypeScript.
- Data is stored in MongoDB.
- Auth uses JWT bearer tokens.
- Mobile secure session uses `expo-secure-store`.
- Saved jobs are stored locally on device.

## 5) If mobile cannot connect to backend

Check these:
- Phone and computer must be on same Wi‑Fi
- Use your computer LAN IP, not `localhost`, on a real phone
- Backend must be running on port 5000
- MongoDB must be running
- Windows Firewall may need to allow Node.js

To find your IP:

### Windows
```powershell
ipconfig
```
Look for IPv4 Address.

### macOS / Linux
```bash
ifconfig
```
or
```bash
ip addr
```

## 6) Main API routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/workers/search`
- `GET /api/workers/me/profile`
- `PUT /api/workers/me/profile`
- `GET /api/workers/me/applications`
- `GET /api/factories/me/profile`
- `PUT /api/factories/me/profile`
- `GET /api/factories/jobs`
- `GET /api/factories/dashboard/summary`
- `POST /api/jobs`
- `GET /api/jobs`
- `GET /api/jobs/:id`
- `POST /api/jobs/:jobId/apply`
- `GET /api/jobs/:jobId/applications`
- `POST /api/applications/:id/shortlist`
- `POST /api/applications/:id/hire`

## 7) Production upgrades you should add next

- Resume upload and certificate upload
- Push notifications
- Interview scheduling
- Offer acceptance
- Admin panel
- OTP login
- Pagination and filters from backend
- Image and document storage with S3 or Cloudinary
- Deployment to Render / Railway / AWS

## 8) Recommended deployment path

### Backend
- MongoDB Atlas
- Render or Railway for Node API

### Mobile
- Expo EAS Build for Android APK/AAB and iOS build

## 9) Command summary

### Backend
```bash
cd backend-api
npm install
npm run dev
```

### Mobile
```bash
cd mobile-app
npm install
npx expo start
```

## 10) What this bundle is

This is a working MVP full-stack starter with the requested flows and code structure. Before production release, you should still add stronger validation, upload handling, testing, rate limiting, and production deployment settings.
