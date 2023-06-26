const parser = {
    operand: [],
    operator: [],
    prevToken: "",

    parse: function(expression) {
        if (/[A-Za-z]+/g.test(expression)) {
            throw new Error("Invalid Expression");
        }

        this.calculate(expression.replaceAll(" ", ""));

        return { operand: this.operand, operator: this.operator };
    },

    calculate: function(expression) {
        // 10+2.1*(6-(4+1)/2)+7

        for (const token of expression) {
            if (!isNaN(token) || token === ".") {
                this.prevToken += token;
            } else {
                this.prevToken !== "" && this.operand.push(Number(this.prevToken));
                this.prevToken = "";
                this.parseOperator(token);
            }
        }
        this.prevToken !== "" && this.operand.push(Number(this.prevToken));
    },

    parseOperator: function(token) {
        switch (token) {
            case "+":
            case "-":
            case "/":
            case "*":
            case "(":
                this.operator.push(token);
                break;
            case ")":
                this.solveBrackets();
                break;
            default:
                break;
        }
    },

    solveBrackets: function() {
        const op2 = this.operand.pop();
        const op1 = this.operand.pop();

        if (
            this.operator.length > 0 &&
            this.operator[this.operator.length - 1] !== "("
        ) {
            const operator = this.operator.pop();
            if (operator === "+") {
                this.operand.push(op1 + op2);
            } else if (operator === "-") {
                this.operand.push(op1 - op2);
            } else if (operator === "*") {
                this.operand.push(op1 * op2);
            } else if (operator === "/") {
                this.operand.push(op1 / op2);
            }
            this.solveBrackets();
        } else {
            this.operator.pop();
            this.operand = [...this.operand, op1];
            this.prevToken = `${op2}`;
        }
    },
};
class Calculator {
    constructor() {
        this.result = 0;
        this.operand = [];
        this.operator = [];
        this.prevToken = "";
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        this.result /= num;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        console.log(parser.parse(expression));
    }
}

var calc = new Calculator();
calc.calculate(`10 +   2.1  *  (   6 - (4 + 1) / 2) + 7`);