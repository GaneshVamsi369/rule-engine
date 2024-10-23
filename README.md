# Rule Engine with AST

This project is a simple 3-tier rule engine application built using **React** (Frontend), **Node.js/Express** (Backend), and **MongoDB Atlas** (Database). The system evaluates user eligibility based on rules defined using an Abstract Syntax Tree (AST) structure. Users can create, combine, and evaluate rules based on attributes like age, department, income, experience, etc.

## Features

- Create conditional rules dynamically using an AST structure.
- Combine multiple rules.
- Evaluate user data against defined rules to determine eligibility.
- Stores rules and application metadata in **MongoDB Atlas**.

---

## Technologies Used

- **Frontend**: React.js (with Axios for API requests)
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **State Management**: React useState and useEffect

---

## File Structure

```bash
rule-engine/
├── backend/                     # Backend (Node.js)
│   ├── models/                  # MongoDB Models
│   │   └── Rule.js              # Rule Model Schema
│   ├── server.js                # Main server file
│   ├── package.json             # Backend dependencies
├── frontend/                    # Frontend (React)
│   ├── public/                  # Public files (HTML)
│   ├── src/                     # React app files
│   │   ├── components/          # Components (UI)
│   │   └── App.js               # Main React component
│   ├── package.json             # Frontend dependencies
│   └── .env                     # Environment variables for backend URL
└── README.md                    # Project documentation

```
## Backend Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (for cloud MongoDB)

### Steps to Setup Backend

1. **Clone the repository**:

    ```bash
    git clone https://github.com/GaneshVamsi369/rule-engine.git
    cd rule-engine/backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster.
   - Get the connection string from the MongoDB Atlas dashboard.
   - Replace the placeholders `<username>`, `<password>`, and `<dbname>` in the MongoDB URI.

4. **Set environment variables**:
   In `server.js` file in the `backend` directory and add the following:

    ```bash
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    PORT=5000
    ```

5. **Start the server**:

    ```bash
    npm start
    ```

    The backend API will now be running on `http://localhost:5000`.

---

## Backend API Endpoints

- **POST** `/api/create_rule`: Create a new rule.
- **GET** `/api/rules`: Get all rules.
- **POST** `/api/evaluate_rule`: Evaluate a rule with user data.

---

## Frontend Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps to Setup Frontend

1. **Navigate to the frontend directory**:

    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set environment variables**:
   Create a `.env` file in the `frontend` directory and add the following:

    ```bash
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```

4. **Run the React app**:

    ```bash
    npm start
    ```

    The React app will be running on `http://localhost:3000`.


###Images

![Screenshot (96)](https://github.com/user-attachments/assets/aef54d58-73f7-4025-a49b-3a9b7d4e7326)
![Screenshot (97)](https://github.com/user-attachments/assets/d75746ea-2182-4493-8528-6cf1027430f7)
![Screenshot (98)](https://github.com/user-attachments/assets/41949759-7266-462c-8dd7-46c89cdf6b2d)
![Screenshot (99)](https://github.com/user-attachments/assets/bb54ffc2-7f17-4a8f-b7cb-a53442000948)


