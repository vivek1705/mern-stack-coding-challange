const Transaction = require('../models/Transaction');

exports.getStatistics = async (month) => {
  const totalSaleAmount = await Transaction.aggregate([
    { $match: { dateOfSale: { $regex: `-${month}-`, $options: 'i' } } },
    { $group: { _id: null, total: { $sum: '$price' } } },
  ]);
  const totalSoldItems = await Transaction.countDocuments({ dateOfSale: { $regex: `-${month}-`, $options: 'i' } });
  const totalNotSoldItems = await Transaction.countDocuments({ dateOfSale: { $not: { $regex: `-${month}-`, $options: 'i' } } });
  return {
    totalSaleAmount: totalSaleAmount[0] ? totalSaleAmount[0].total : 0,
    totalSoldItems,
    totalNotSoldItems,
  };
};

exports.getBarChartData = async (month) => {
  const ranges = [
    { range: '0-100', min: 0, max: 100 },
    { range: '101-200', min: 101, max: 200 },
    { range: '201-300', min: 201, max: 300 },
    { range: '301-400', min: 301, max: 400 },
    { range: '401-500', min: 401, max: 500 },
    { range: '501-600', min: 501, max: 600 },
    { range: '601-700', min: 601, max: 700 },
    { range: '701-800', min: 701, max: 800 },
    { range: '801-900', min: 801, max: 900 },
    { range: '901-above', min: 901, max: Infinity },
  ];

  const barChartData = [];
  for (const range of ranges) {
    const count = await Transaction.countDocuments({
      dateOfSale: { $regex: `-${month}-`, $options: 'i' },
      price: { $gte: range.min, $lt: range.max },
    });
    barChartData.push({ range: range.range, count });
  }
  return barChartData;
};

exports.getPieChartData = async (month) => {
  const pieChartData = await Transaction.aggregate([
    { $match: { dateOfSale: { $regex: `-${month}-`, $options: 'i' } } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ]);
  return pieChartData;
};
