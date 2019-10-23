document.getElementsByTagName('p')[1].onclick = function() {
    this.style.backgroundColor = `gray`;
}

let alertButton = document.getElementById('alert');
alertButton.onclick = function() {
    alert('Fun fact: Alex is my legal first name, not Alexander.');
}