const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { initializeDatabase } = require('./utils/apiInitializer');
const transactionRoutes = require('./routes/transactionRoutes');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dotenv.config();

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Initialize the database
initializeDatabase();

app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
