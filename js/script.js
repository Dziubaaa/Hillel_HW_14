function getUserInput() {
    const rows;
    const columns;
    
    // Зациклюємо введення, доки не отримаємо вірне число
    while (true) {
      rows = prompt("Введіть кількість перших множників: ");
      columns = prompt("Введіть кількість других множників:");
  
      // Перевірка на скасування.
      if (rows === null || columns === null) {
        alert("Ви скасували введення.");
        return null;
      }
  
      // Перевірка, чи введено тільки числа спеціальним виразом.
      if (/^\d+$/.test(rows) && /^\d+$/.test(columns)) {
        break; // Виходимо з циклу, якщо введено число
      } else {
        alert("Введіть, будь ласка, тільки числа.");
      }
    }
  
    return { rows: parseInt(rows, 10), columns: parseInt(columns, 10) }; // Повертаємо введені числа
  }
  
  const userInput = getUserInput();
  
  if (userInput !== null) {
    multiplicationTable(userInput.rows, userInput.columns);
  }
  
  function multiplicationTable(rows, columns) {
    const table = document.getElementById("multiplicationTbl");
  
    for (let i = 1; i <= rows; i++) {
      let row = table.insertRow(i - 1);
  
      for (let j = 1; j <= columns; j++) {
        let cell = row.insertCell(j - 1);
        cell.textContent = i * j;
      }
    }
  }


