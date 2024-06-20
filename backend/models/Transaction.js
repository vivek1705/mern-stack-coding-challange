// const mongoose = require('mongoose');

// const TransactionSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: String,
//   dateOfSale: String,
//   category: String,
// });

// module.exports = mongoose.model('Transaction', TransactionSchema);

const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  price: String,
  dateOfSale: String,
  category: String,
  image: String,
  sold: Boolean,
});

module.exports = mongoose.model('Transaction', TransactionSchema);
