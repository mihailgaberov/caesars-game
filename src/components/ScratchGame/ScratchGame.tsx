
export function ScratchGame() {
  const romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  function generateScratchGame() {
    const scratchCard = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const randomIndex = Math.floor(Math.random() * romanNumbers.length);
        const randomRomanNumber = romanNumbers[randomIndex];
        row.push(randomRomanNumber);
      }
      scratchCard.push(row);
    }
    return scratchCard;
  }

  const scratchCard = generateScratchGame();

  return (
    <div>
      {scratchCard.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((number, columnIndex) => (
            <span key={columnIndex}>{number} | </span>
          ))}
        </div>
      ))}
    </div>
  )
}
