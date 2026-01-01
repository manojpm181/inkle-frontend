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

    # Clone repository
    git clone https://github.com/manojpm181/inkle-frontend.git
    cd inkle-frontend
    
    # Install dependencies
    npm install @tanstack/react-table axios
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    
    npm install
    
    # Run development server
    npm run dev

Open http://localhost:5173
in your browser.

##  🔹 Folder Structure
  <img width="246" height="735" alt="image" src="https://github.com/user-attachments/assets/106619c0-dfa5-4646-97c9-17c6af5ddd3f" />

##   🔹 Highlights

- Fully functional real-world SaaS UI
- Clean, maintainable, production-ready code
- Modern UX and responsive design
- Advanced table features and editable modal

##   🔹 Author

Manoj P M
- Frontend Developer | Aspiring Intern
- 📧 manojpoojari1511@gmail.com
