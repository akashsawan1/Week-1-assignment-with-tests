/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    var TotalCategory={};
    for(transaction of transactions) {
        var category = transaction.category;
        var price = transaction.price;
        if (category in TotalCategory) {
            TotalCategory[category] += price;
        } else {
            TotalCategory[category] = price;
        }
    }

      const result = [];
      for(const category in TotalCategory){
          result.push({category : category , totalSpent : TotalCategory[category]});
      }
      return result;

}

module.exports = calculateTotalSpentByCategory;
