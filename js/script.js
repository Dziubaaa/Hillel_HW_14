function getUserInput() {
    let rows;
    let columns;
    
    // Зациклюємо введення, доки не отримаємо правильне число
    while (true) {
      rows = prompt("Введіть кількість рядків:");
      columns = prompt("Введіть кількість стовпців:");
  
      // Перевірка, чи користувач вибрав "Cancel"
      if (rows === null || columns === null) {
        alert("Ви скасували введення.");
        return null; // Зупинка виконання функції при скасуванні введення
      }
  
      // Перевірка, чи введено тільки числа
      if (/^\d+$/.test(rows) && /^\d+$/.test(columns)) {
        break; // Виходимо з циклу, якщо введено число
      } else {
        alert("Введіть, будь ласка, тільки числа.");
      }
    }
  
    return { rows: parseInt(rows, 10), columns: parseInt(columns, 10) }; // Повертаємо введені числа
  }
  
  let userInput = getUserInput();
  
  if (userInput !== null) {
    multiplicationTable(userInput.rows, userInput.columns);
  }
  
  function multiplicationTable(rows, columns) {
    let table = document.getElementById("multiplicationTbl");
  
    for (let i = 1; i <= rows; i++) {
      let row = table.insertRow(i - 1);
  
      for (let j = 1; j <= columns; j++) {
        let cell = row.insertCell(j - 1);
        cell.textContent = i * j;
      }
    }
  }


