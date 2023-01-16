
function addExpense(e) {
  e.preventDefault();
  // yahan pe kuch perform krke value nikalni h inputs ki
  const number = e.target.number.value;
  const select = e.target.select.value;
  const selects = e.target.selects.value;
  

  // yahan pe inn values se ek object create kr diya
  const expenseObj = {
    number,
    select,
    selects,
  };

  // uske baad usko show krna h screen pe
  displayExpense(expenseObj);
}

function displayExpense(expenseObj) {
  const ul = document.getElementById("exp-list");
  const li = `<tbody>${expenseObj.number}</tbody>`;
  const li4 = `<tbody>${expenseObj.select}</tbody>`;
  const li5 = `<tbody>${expenseObj.selects}</tbody>`;

  ul.innerHTML = ul.innerHTML + li;
  ul.innerHTML = ul.innerHTML + li4;
  ul.innerHTML = ul.innerHTML + li5;
                           
}