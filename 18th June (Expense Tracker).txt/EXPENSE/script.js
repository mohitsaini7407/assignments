var balance = document.getElementById('balance');
var income = document.getElementById('income');
var expense = document.getElementById('expense');
var transactionsList = document.getElementById('transactions');
var form = document.getElementById('form');
var text = document.getElementById('text');
var amount = document.getElementById('amount');

var transactions = [];

var stored = localStorage.getItem('transactions');
if (stored !== null) {
  transactions = JSON.parse(stored);
}

function generateID() {
  return Math.floor(Math.random() * 1000000);
}

function addTransaction(event) {
  event.preventDefault();

  var description = text.value;
  var amt = parseFloat(amount.value);

  if (description === '' || isNaN(amt)) {
    alert('Please enter valid data');
    return;
  }

  var transaction = {
    id: generateID(),
    text: description,
    amount: amt
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  form.reset();
}

function deleteTransaction(id) {
  var updated = [];
  for (var i = 0; i < transactions.length; i++) {
    if (transactions[i].id !== id) {
      updated.push(transactions[i]);
    }
  }
  transactions = updated;
  updateLocalStorage();
  renderTransactions();
}

function renderTransactions() {
  transactionsList.innerHTML = '';

  var total = 0;
  var incomeTotal = 0;
  var expenseTotal = 0;

  for (var i = 0; i < transactions.length; i++) {
    var txn = transactions[i];
    var li = document.createElement('li');
    var cls = txn.amount < 0 ? 'minus' : 'plus';
    li.className = cls;

    var sign = txn.amount < 0 ? '-' : '+';
    li.innerHTML =
      txn.text +
      ' <span>' + sign + '$' + Math.abs(txn.amount).toFixed(2) + '</span>' +
      ' <button onclick="deleteTransaction(' + txn.id + ')">❌</button>';

    transactionsList.appendChild(li);

    total += txn.amount;
    if (txn.amount > 0) {
      incomeTotal += txn.amount;
    } else {
      expenseTotal += txn.amount;
    }
  }

  balance.innerText = '$' + total.toFixed(2);
  income.innerText = '$' + incomeTotal.toFixed(2);
  expense.innerText = '$' + Math.abs(expenseTotal).toFixed(2);
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

form.addEventListener('submit', addTransaction);
renderTransactions();
