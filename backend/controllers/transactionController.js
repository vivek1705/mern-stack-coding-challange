const Transaction = require('../models/Transaction');
const { getStatistics, getBarChartData, getPieChartData } = require('../services/transactionService');

exports.listTransactions = async (req, res) => {
  try {
    const { page = 1, perPage = 10, search = '', month } = req.query;
    const query = {
      dateOfSale: { $regex: new RegExp(`-${month}-`, 'i') },
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { price: { $regex: search, $options: 'i' } },
      ],
    };
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(Number(perPage));
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStatistics = async (req, res) => {
  try {
    const { month } = req.query;
    const stats = await getStatistics(month);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBarChartData = async (req, res) => {
  try {
    const { month } = req.query;
    const barChartData = await getBarChartData(month);
    res.json(barChartData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPieChartData = async (req, res) => {
  try {
    const { month } = req.query;
    const pieChartData = await getPieChartData(month);
    res.json(pieChartData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCombinedData = async (req, res) => {
  try {
    const { month } = req.query;
    const stats = await getStatistics(month);
    const barChartData = await getBarChartData(month);
    const pieChartData = await getPieChartData(month);
    res.json({ stats, barChartData, pieChartData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

