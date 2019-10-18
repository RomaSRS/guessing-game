class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.result = null;    
    }

    setRange(min, max) {
        this.minVal = min;
        this.maxVal = max; 
    }

    guess() {
       return this.solution = Math.round((this.maxVal + this.minVal) / 2);
    }

    lower() {
        this.maxVal = this.solution;
    }

    greater() {
        this.minVal = this.solution;
    }
}

module.exports = GuessingGame;
