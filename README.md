# RitualRhythm

RitualRhythm is a habit-tracking web application designed to help users create, track, and delete habits effectively. The project includes a backend server (Node.js/Express) and a frontend client (React) to provide a complete full-stack experience.
> [!CAUTION]
> **Follow the instructions below to build and run the project.**

## :electric_plug: How to obtain the source code?
  If you want to obtain the source from GitHub manually: 
  - Click the code button on the right upper side of the repository
  - Download Zip 
  - Extract zip file
  - Open Code IDE with extracted Zip file
  
  If you created a folder on code IDE then use this command to clone the repository with all source codes:
  ```sh
  $ git clone https://github.com/QuZu/RitualRhythm.git
```
## 📁 File Structure
```
├── client                     # Frontend (React)
│   ├── node_modules           # React dependencies
│   ├── public                 # Public assets
│   ├── src                    # Source code for React app
│   │   ├── components         # Reusable UI components
│   │   │   ├── habitForm.jsx
│   │   │   ├── habitItem.jsx
│   │   ├── pages              # React pages
│   │   │   ├── AddHabit.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DeleteHabit.jsx
│   │   ├── services           # Service for API calls
│   │   │   ├── habitService.js
│   │   ├── styles             # CSS files for styling
│   │   │   ├── AddHabit.css
│   │   │   ├── Dashboard.css
│   │   │   ├── DeleteHabit.css
│   │   │   ├── HabitItem.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── setupTests.js
│   ├── .env                   # Environment variables for React
│   ├── package.json           # Dependencies and scripts for React
│   ├── package-lock.json
│
├── server                     # Backend (Node.js/Express)
│   ├── controllers            # Controller logic for API endpoints
│   │   ├── habitController.js
│   ├── models                 # Data models
│   │   ├── habitModel.js
│   ├── routes                 # API routes
│   │   ├── habitRoutes.js
│   ├── .env                   # Environment variables for server
│   ├── package.json           # Dependencies and scripts for Node.js
│   ├── package-lock.json
│
├── .gitignore                 # Files to be ignored by Git
├── README.md                  # Project documentation
```
## :hammer: How to build and run the software?
####  If you want to build on your local machine:
1.  [Follow this instructions](#how-to-obtain-the-source-code) to **get source code**
2. **Install Dependencies**
    ##### Frontend:
    ```bash
    cd client
    npm install
    ```
    ##### Backend:
    ```bash
    cd server
    npm install
    ```
3. **Set Up Environment Variables**
    ##### Frontend (client/.env):
    ```bash
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```
4. **To start the application**
   ##### Backend:
   ```bash
   cd server
   npm start
   ```
   ##### Frontend:
   ```bash
   cd server
   node server.js
   ```

