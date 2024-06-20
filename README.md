
# MERN Stack Coding Challenge

## Project Description
This project is a MERN stack application that implements various APIs to manage and display product transactions. It includes backend services to fetch and process data, and frontend components to visualize the data in tabular and graphical formats.

## Table of Contents
- [Project Description](#project-description)
- [Table of Contents](#table-of-contents)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Backend Development](#backend-development)
  - [Database Schema](#database-schema)
  - [API Endpoints](#api-endpoints)
- [Frontend Development](#frontend-development)
  - [UI Components](#ui-components)
- [Integration and Testing](#integration-and-testing)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

## Technologies Used
- **Backend**: Node.js, Express, MongoDB, Mongoose, Axios
- **Frontend**: React, Axios, Chart.js, React-Chartjs-2
- **Deployment**:Github

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/vivek1705/mern-stack-coding-challange.git
   cd mern-stack-coding-challenge
   ```

2. **Install dependencies**:
   ```bash
   # Backend dependencies
   cd backend
   npm install
   
   # Frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory with the following contents:
     ```
     MONGODB_URI= mongodb_connection_string
     PORT=5000
     ```

4. **Run the backend server**:
   ```bash
   cd backend
   npm start
   ```

5. **Run the frontend application**:
   ```bash
   cd ../frontend
   npm start
   ```

## Backend Development
### Database Schema
- Defined a Mongoose schema for product transactions with fields like `title`, `description`, `price`, `dateOfSale`, `category`, `sold`, etc.

### API Endpoints
1. **Initialize Database**: 
   - **Endpoint**: `/api/init`
   - **Method**: GET
   - **Description**: Fetches JSON data from a third-party API and seeds the database.

2. **List Transactions**: 
   - **Endpoint**: `/api/transactions`
   - **Method**: GET
   - **Description**: Lists all transactions with support for search and pagination.

3. **Statistics**: 
   - **Endpoint**: `/api/statistics`
   - **Method**: GET
   - **Description**: Returns total sale amount, total sold items, and total unsold items for a selected month.

4. **Bar Chart Data**: 
   - **Endpoint**: `/api/barchart`
   - **Method**: GET
   - **Description**: Provides data for a bar chart showing the number of items within specified price ranges for a selected month.

5. **Pie Chart Data**: 
   - **Endpoint**: `/api/piechart`
   - **Method**: GET
   - **Description**: Provides data for a pie chart showing the distribution of items across unique categories for a selected month.

6. **Combined Data**: 
   - **Endpoint**: `/api/combined`
   - **Method**: GET
   - **Description**: Fetches data from the above APIs and returns a combined JSON response.

## Frontend Development
### UI Components
1. **Transactions Table**:
   - Displays transactions in a table format.
   - Includes a dropdown for selecting the month and a search box for filtering transactions.
   - Pagination controls for navigating through transactions.

2. **Transactions Statistics**:
   - Displays total sales, total sold items, and total unsold items for the selected month.

3. **Transactions Bar Chart**:
   - Visualizes the number of items within specific price ranges for the selected month using `react-chartjs-2`.

4. **Transactions Pie Chart**:
   - Visualizes the distribution of items across unique categories for the selected month using `react-chartjs-2`.

## Integration and Testing
1. **API Integration**:
   - Connected frontend components to the backend APIs using `axios`.
   - Ensured data was correctly fetched and displayed in the table and charts based on the selected month and search input.

2. **Testing**:
   - Tested each API endpoint for correctness and performance using Postman.
   - Verified the frontend components for accurate data representation and responsiveness.

## Deployment
1. **Backend Deployment**:
   - Deployed the backend server to github.
   - Set up environment variables for configuration.

2. **Frontend Deployment**:
   - Deployed the React application to github.
   - Ensured the frontend could correctly communicate with the deployed backend.

## Conclusion
This project successfully implements the required functionalities, including listing transactions with search and pagination, displaying statistics, and visualizing data using bar and pie charts. The application is responsive and user-friendly, meeting all specified requirements.

