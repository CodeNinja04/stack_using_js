
var push_btn = document.getElementById("push-btn");
var pop = document.getElementById("pop-btn");
var size = document.getElementById("size-stack");
var size_btn = document.getElementById("size-btn");
var display = document.getElementById("display");


class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    pushd(element) {
        if (!isNaN(element)) {
            document.getElementById("temp").innerHTML = " ";
            this.data[this.top] = element;
            this.top += 1;
        } else {
            document.getElementById("temp").innerHTML = "Please Enter a Numeric Value!";
        }
    }
    length() {
        document.getElementById("size-input").innerHTML = "Size Of stack:" + this.top;
    }
    peek() {
        return this.data[this.top - 1];
    }
    isEmpty() {
        return this.top === 0;
    }
    popn() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        } else {
            document.getElementById("temp").innerHTML = "Stack is Empty!";
        }
    }
    print() {

        display.innerHTML = "";
        this.data.forEach(function(x) {
            display.innerHTML += "<div class='display-text'>" + x + "</div>"
        })

    }
}

let mainstack;

mainstack = new Stack();

push_btn.addEventListener("click", function() {
    var y = document.getElementById("push-input").value;
    mainstack.pushd(y);
    document.getElementById("push-input").value = "";
    mainstack.length();
    mainstack.print();
    console.log(mainstack.top);
})


pop.addEventListener("click", function() {
    mainstack.popn();
    document.getElementById("push-input").value = "";
    mainstack.print();
    mainstack.length();
})
