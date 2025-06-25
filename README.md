# 🎉 FindFest

**FindFest** is a dynamic React-based web application for discovering and exploring various events. It features a responsive and interactive UI with Firebase authentication and protected routes.

---

## 🚀 Live Site

[🔗 Visit Event Explorer](https://event-explorer-findfest.netlify.app/)

---

## 📌 Features

- 🎞️ **Image Slider** with 5 auto-playing images
- 📸 **Moment Section** showcasing key event highlights
- 📅 **Upcoming Events** displayed as cards loaded from JSON
- 🔍 **View Details** dynamically navigates to event detail pages
- 🎭 **Entertainment Section** with additional event content
- 🔒 **Protected Routes** (`/blog`, `/my-profile`) accessible only after login
- 👤 **Firebase Authentication**:
  - Email/Password login
  - Google Sign-in and Sign-up
  - Forgot Password support
- 🧭 **Dynamic Navbar** and ⚓ **Footer** with:
  - Social media links
  - Privacy Policy
  - Terms of Use
- 🧠 **Dynamic Page Titles** using `react-helmet-async`
- 💫 Smooth animations via AOS
- 🍞 Toast notifications using `react-hot-toast`

---

| Package Name              | Description                               |
| ------------------------- | ----------------------------------------- |
| 🌀 **@tailwindcss/vite**  | Tailwind CSS integration with Vite        |
| 💨 **tailwindcss**        | Utility-first CSS framework               |
| 🔥 **firebase**           | Backend services (Auth, Hosting, etc.)    |
| ⚛️ **react**              | JavaScript library for building UIs       |
| 🧱 **react-dom**          | React DOM renderer                        |
| 🧠 **react-helmet**       | Control document head                     |
| 🧠 **react-helmet-async** | Async support for dynamic document titles |
| 🍞 **react-hot-toast**    | Toast notification library                |
| 🎨 **react-icons**        | Popular icons from multiple libraries     |
| 🧭 **react-router**       | Declarative routing for React             |
| 🎢 **react-slick**        | Carousel/slider component                 |
| 🎠 **slick-carousel**     | CSS/JS for the slick slider               |
| 🌀 **aos**                | Animate On Scroll library                 |
| 🎯 **react-scroll**       | Scroll to elements smoothly              |
---

## 🛠️ How to Run Locally

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/findfest.git
cd findfest

```
### 2️⃣ Set Up the Client
```bash
cd client
npm install
npm run dev
```
This will install the frontend dependencies and start the client on http://localhost:5173 (default Vite port).

### 3️⃣ Set Up the Server
Open a new terminal tab or window, then run:

```bash
cd server
npm install
npm run start
```
This will install the backend dependencies and start the server on http://localhost:5000 or your configured port.

### 4️⃣ Configure Environment Variables
Set up your .env files for both client and server with:

✅ Firebase credentials (for authentication) <br>
✅ MongoDB connection URI (for backend database) <br>
⚠️ Without these, Firebase Auth and database features won't function properly.


---


## 📸 Application Screenshots

<p align="center">
  <img src="https://i.postimg.cc/k5ctPWpD/findfest-1.png" width="65%">
  <img src="https://i.postimg.cc/KYZRfR8b/findfest-2.png" width="65%">
  <img src="https://i.postimg.cc/xdtq4nXz/findfest-3.png" width="65%">
  <img src="https://i.postimg.cc/ThMPDP4Z/findfest-4.png" width="45%">
</p>

---
