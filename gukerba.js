class Game {
  constructor(playerChoice) {
    this.playerChoice = playerChoice;
    this.comChoice = ["Batu", "Gunting", "Kertas"][Math.floor(Math.random() * 3)]; // komputer random
    this.result = "DRAW";
  }

  start() {
    if (this.playerChoice === this.comChoice) {
      this.result = "DRAW";
    } else if (
      (this.playerChoice === "Batu" && this.comChoice === "Gunting") ||
      (this.playerChoice === "Gunting" && this.comChoice === "Kertas") ||
      (this.playerChoice === "Kertas" && this.comChoice === "Batu")
    ) {
      this.result = "MENANG";
    } else {
      this.result = "KALAH";
    }
    return this.result;
  }
}

const game1 = new Game("Kertas");
console.log(`Player Choice: ${game1.playerChoice}`);
console.log(`Computer Choice: ${game1.comChoice}`);
console.log(`Result: ${game1.start()}`);