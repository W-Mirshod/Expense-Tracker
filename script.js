const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
} else {
  document.body.classList.remove('dark');
  themeToggle.textContent = '🌙';
}
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
};
const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const dateInput = document.getElementById('expense-date');
const list = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let expenses = JSON.parse(localStorage.getItem('expenses') || '[]');

function renderExpenses() {
    list.innerHTML = '';
    let total = 0;
    expenses.forEach((exp, i) => {
        total += parseFloat(exp.amount);
        const li = document.createElement('li');
        const info = document.createElement('div');
        info.className = 'expense-info';
        const name = document.createElement('span');
        name.className = 'expense-name';
        name.textContent = exp.name;
        const date = document.createElement('span');
        date.className = 'expense-date';
        date.textContent = exp.date;
        info.appendChild(name);
        info.appendChild(date);
        const amount = document.createElement('span');
        amount.className = 'expense-amount';
        amount.textContent = `$${parseFloat(exp.amount).toFixed(2)}`;
        const del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = '✕';
        del.onclick = () => {
            expenses.splice(i, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
        };
        li.appendChild(info);
        li.appendChild(amount);
        li.appendChild(del);
        list.appendChild(li);
    });
    totalAmount.textContent = total.toFixed(2);
}

form.onsubmit = e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const amount = amountInput.value;
    const date = dateInput.value;
    if (!name || !amount || !date) return;
    expenses.push({ name, amount, date });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
    form.reset();
};

renderExpenses();
