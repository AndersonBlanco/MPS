function getroute() {
    var number = document.getElementById('numberInput').value;
    fetch(`http://localhost:5000/calculate?number=${number}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Factorial: ${data.result}`;
            })
        .catch(error => console.error('Error:', error));
}
