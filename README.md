# 🎲 Tenzies Game

A fun and interactive Tenzies game built using **React 19**, **Vite**, and **Node.js 22**. The goal is to roll dice until all 10 show the same number. You can freeze dice to hold their values between rolls. Celebrate your win with confetti and start a new game instantly!

## ✨ Features

- 10 dice with values ranging from 1 to 6.
- Click a die to "freeze" it—frozen dice will not change when you roll.
- Roll unfrozen dice until all dice match.
- Automatic win detection with animated confetti 🎉.
- "New Game" button appears after winning.
- Compact and unique IDs for each die using `nanoid`.

## 🛠️ Tech Stack

- ⚛️ React 19
- ⚡ Vite
- 🟢 Node 22+
- 🎉 [react-confetti](https://www.npmjs.com/package/react-confetti)
- 🆔 [nanoid](https://www.npmjs.com/package/nanoid)

## 🛆 Installation

Before you begin, make sure you have **Node.js version 22 or higher** and **npm** installed.

### 1. Clone the repository

```bash
git clone https://github.com/Utkarsh-kamra/Tenzies-Game.git
cd tenzies-game
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## 📁 Project Structure

```
tenzies-game/
├── public/
├── src/
│   ├── components/
│   │   └── Die.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📚 Dependencies

Make sure these are installed via `npm install`:

```bash
npm install react react-dom
npm install nanoid
npm install react-confetti
```

> These are typically already listed in your `package.json`, so just running `npm install` will handle it.

## ✅ Requirements

- Node.js v22 or newer
- npm v9 or newer
- Modern browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for first-time dependency installation)


## 🚀 Deployment

You can deploy this app on platforms like **Netlify**, **Vercel**, or **GitHub Pages**. Just make sure to build it first:

```bash
npm run build
```

