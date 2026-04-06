# 💸 FinSight – Personal Finance Dashboard

A modern, responsive personal finance dashboard built with **React, Zustand, and Recharts**, designed to track income, expenses, and financial insights in a clean and intuitive UI.

---

## 🚀 Features

### 📊 Dashboard
- Monthly income vs expense visualization
- Savings calculation and trends
- Key financial metrics (income, expenses, savings, averages)

### 💰 Transactions
- Add and delete transactions (Admin only)
- Categorized expense tracking
- Search and filter functionality
- Real-time updates using global state

### 📈 Insights
- Category-wise spending breakdown (Pie chart)
- Monthly comparison analytics
- Top spending category detection

### 🔐 Role-based UI
- **Admin**
  - Can add & delete transactions
- **Viewer**
  - Read-only access

### 📱 Fully Responsive
- Desktop → Sidebar layout  
- Mobile → Bottom navigation  
- Modal system:
  - Bottom sheet (mobile)
  - Centered modal (desktop)

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **State Management:** Zustand
- **Charts:** Recharts
- **Styling:** Tailwind CSS

---

## 📂 Project Structure
src/
├── Components/
│ ├── Charts/
│ ├── Layout/
│ ├── UI/
│
├── Stores/
│ └── useDataStore.js
│
├── Utils/
│ ├── getBalanceData.js
│ ├── getCategoryData.js
│ ├── getMonthlyComparisonData.js
│
├── Data/
│ └── transactions.json

---

## ⚙️ Core Architecture

### Zustand Store
Handles:
- transactions
- balance data
- category data
- monthly comparison data

### Derived Data System
All analytics are computed via utility functions:
- `getBalanceData`
- `getCategoryData`
- `getMonthlyComparisonData`

State updates → automatic recalculation → instant UI updates

---

## ➕ Add Transaction Flow

1. Open modal (portal-based)
2. Fill form
3. Submit
4. Zustand updates state
5. UI + charts update instantly

---

## 🗑️ Delete Transaction Flow

- Delete using `id`
- Store recalculates all derived data

---

## 🎯 Highlights

- Clean Zustand-based state architecture
- Efficient derived state computation
- Fully responsive UI (no UI library)
- Portal-based modal system
- Role-based UI control
- Scalable component structure

---

## 🧪 Future Improvements

- Firebase backend integration
- Authentication system
- Persistent storage
- Edit transactions
- Dark mode
- Animations (Framer Motion)
- Pagination for large datasets

---

## 🧑‍💻 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/finsight.git

# Install dependencies
npm install

# Run the app
npm run dev

📌 Author

Gurseerat Singh
Frontend Developer | CSE Undergrad


---

If you want next-level polish, I can add:
- 🔥 badges (tech stack icons)
- 🔥 screenshots section (your UI looks clean af already)
- 🔥 live demo section (Netlify/Vercel)

Just say 👍