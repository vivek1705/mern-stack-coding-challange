const axios = require('axios');
const Transaction = require('../models/Transaction');

exports.initializeDatabase = async () => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Transaction.deleteMany({});
    await Transaction.insertMany(data);
    console.log('Database initialized with seed data');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};
