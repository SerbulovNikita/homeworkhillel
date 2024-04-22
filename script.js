    function drawTree(height, symbol, inverse = false) {
            let tree = '';
            if (!inverse) {
                for (let i = 1; i <= height; i++) {
                    for (let j = 1; j <= i; j++) {
                        tree += symbol;
                    }
                    tree += '<br>';
                }
            } else {
                for (let i = height; i >= 1; i--) {
                    for (let j = 1; j <= i; j++) {
                        tree += symbol;
                    }
                    tree += '<br>';
                }
            }
            document.getElementById('container').innerHTML = '<p>' + tree + '</p>';
        }
        function checkInput() {
            let heightInput = document.getElementById("height").value;
            let symbolInput = document.getElementById("symbol").value;
            let drawButton = document.getElementById("drawButton");
            let drawButtonInverse = document.getElementById("drawButtonInverse");
            if (heightInput !== "" && symbolInput !== "") {
                drawButton.style.display = "inline-block";
                drawButtonInverse.style.display = "inline-block";
            } else {
                drawButton.style.display = "none";
                drawButtonInverse.style.display = "none";
            }
        }
        document.getElementById("height").addEventListener("input", checkInput);
        document.getElementById("symbol").addEventListener("input", checkInput);
        document.getElementById("drawButton").addEventListener("click", function() {

            let height = parseInt(document.getElementById("height").value);
            let symbol = document.getElementById("symbol").value;
            drawTree(height, symbol);
        });
        document.getElementById("drawButtonInverse").addEventListener("click", function() {
            let height = parseInt(document.getElementById("height").value);
            let symbol = document.getElementById("symbol").value;
            drawTree(height, symbol, true);
        });