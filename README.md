# Frontend Intern Assignment — Inkle

A modern, interactive customer management UI built using **React**, **TailwindCSS**, and **@tanstack/react-table**.  
This project simulates a real-world SaaS dashboard with editable tables, search, and dropdowns, following best UX practices.

---

## 🔹 Features

- **Dynamic Table**  
  - Built with `@tanstack/react-table`  
  - Columns: Name, Gender, Request Date, Country, Actions  
  - Editable inline modal for updating customer details  

- **Edit Modal**  
  - Pixel-perfect, responsive, and modern UI  
  - Searchable country dropdown  
  - Add new countries not in API  
  - Form validation with visible Save button only when data is changed  
  - Smooth animations with `framer-motion`  
  - Accessible (ESC to close, keyboard navigation)

- **API Integration**  
  - GET and PUT requests to Mock APIs  
  - Fetch countries dynamically  
  - Update customer details seamlessly  

- **UX Enhancements**  
  - Hover states, badges for gender  
  - Readable text colors (dark text on light background)  
  - “No results” message for unmatched dropdown searches  
  - Skeleton loading for async data fetch  
  - Toast notifications for success/error

---

## 🔹 Tech Stack

- **Frontend:** React 18, TailwindCSS  
- **Table Library:** @tanstack/react-table v8  
- **Animations:** Framer Motion  
- **HTTP Requests:** Axios  
- **Notifications:** react-hot-toast  
- **API:** MockAPI (https://685013d7e7c42cfd17974a33.mockapi.io)

---

## 🔹 Project Setup

```bash
# Clone repository
git clone https://github.com/yourusername/frontend-assignment.git
cd frontend-assignment

# Install dependencies
npm install

# Run development server
npm run dev

