function saveNames(event) {
    event.preventDefault();
    const name1 = document.getElementById('player1').value;
    const name2 = document.getElementById('player2').value;
    localStorage.setItem('name1', name1);
    localStorage.setItem('name2', name2);
   
  }