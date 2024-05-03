/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let res = {};
  transactions.forEach(transaction => {
    res[transaction.category] = (res[transaction.category] || 0) + transaction.price;
  });

  let arr = []
  for (let category in res) {
    arr.push({ category: category, totalSpent: res[category] })
  }

  return arr;
}

module.exports = calculateTotalSpentByCategory;
