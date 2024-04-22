let numbers = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        numbers.push(i);
    }
}
document.getElementById('result').innerText = numbers.join(', ');