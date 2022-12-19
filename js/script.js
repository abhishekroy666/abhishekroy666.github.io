const symbols = ['%', '\xD7', '*', '-', '+' , '\xF7', '/'];
const decimalPoint = '.';

function reset() {
    document.getElementById('result').innerHTML = 0;
    document.getElementById('expression').value = '0';
}

function evaluateExpr() {
    this.evaluate();
    document.getElementById('expression').value = document.getElementById('result').innerHTML;
}

function evaluate() {
    var expr = document.getElementById('expression').value;
    var result = parseFloat(document.getElementById('result').innerHTML);
    var lastNum = '';
    var symbol = '';
    for (var i = expr.length - 1; i >= 0; i--) {
        var ch = expr.charAt(i);
        if (symbols.includes(ch)) {
            symbol = ch;
            if (lastNum != '') {
                var val = parseFloat(lastNum);
                switch (ch) {
                    case '%' :
                        result = result % val;
                        break;
                    case '\xD7' :
                    case '*' :
                        result = result* val;
                        break;
                    case '-' :
                        result = result - val;
                        break;
                    case '+' :
                        result = result + val;
                        break;
                    case '\xF7' :
                    case '/' :
                        if (val != 0) {
                            result = result / val;
                        }
                        break;
                    default :
                        break;
                }
            }
            break;
        }
        lastNum = ch + lastNum;
    }
    if (symbol == '') {
        result = parseFloat(lastNum).toFixed(8);
    }
    document.getElementById('result').innerHTML = result;
}

function addToExpr(button) {
    var expr = document.getElementById('expression').value;
    var buttonVal = button.innerHTML;
    if (symbols.includes(buttonVal)) {
        if (expr == null || expr == '0') {
            return;
        } else {
            var lastChar = expr.charAt(expr.length - 1);
            console.log(lastChar);
            if (symbols.includes(lastChar) || decimalPoint == lastChar) {
                return;
            }
            this.evaluate();
        }
    } else if (decimalPoint == buttonVal) {
        if (expr == null || expr == '0') {
            return;
        } else {
            var lastChar = expr.charAt(expr.length - 1);
            if (symbols.includes(lastChar) || decimalPoint == lastChar) {
                return;
            }
        }
    }
    if (expr == null || expr == '0') {
        if (symbols.includes(buttonVal) || decimalPoint == buttonVal) {
            return;
        }
    } else {

    }
    if (expr == null || expr == '0') {
        expr = buttonVal;
    } else {
        expr += buttonVal;
    }
    document.getElementById('expression').value = expr;
}

