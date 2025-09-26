# React Beginner Projects

A collection of React mini-projects for learning and practice.

## Projects Included

### 1. Counter App (`src/components/Counter.jsx`)
- A simple counter with increment and decrement functionality
- Uses React hooks (useState)
- Features: + and -- buttons

### 2. Meals App (`src/components/Meals.jsx`)
- Fetches seafood meals from TheMealDB API
- Displays meal cards with images and names
- Uses axios for API calls and useEffect hook

### 3. Todo App (`src/components/Todo.jsx`)
- Simple todo list with add and remove functionality
- Uses useState for state management
- Features: input field, submit button, and todo list

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/nothariharan/ReactBeginner.git
cd ReactBeginner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## Project Structure

```
src/
├── App.jsx              # Main app component
├── components/
│   ├── Counter.jsx      # Counter mini-project
│   ├── Meals.jsx        # Meals API mini-project
│   └── Todo.jsx         # Todo list mini-project
└── main.jsx             # React entry point
```

## Technologies Used

- React 19.1.1
- Vite (build tool)
- Axios (HTTP client)
- ESLint (code linting)

## Note

CSS files are intentionally excluded from this repository as per project requirements.