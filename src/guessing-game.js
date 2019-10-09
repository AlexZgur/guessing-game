class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.leftBorder = min;
        this.rightBorder = max;
    }

    guess() {
        return Math.ceil((this.rightBorder + this.leftBorder) / 2);
    }

    lower() {       
        this.rightBorder = Math.ceil((this.rightBorder + this.leftBorder) / 2);
    }

    greater() {
        this.leftBorder = Math.ceil((this.rightBorder + this.leftBorder) / 2);
    }
}

module.exports = GuessingGame;
