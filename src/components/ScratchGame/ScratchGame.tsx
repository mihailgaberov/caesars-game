import styles from './scratch-game.module.scss'
import { Card } from '../Card'

export function ScratchGame() {
  const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

  function generateScratchGame() {
    const scratchCard = []
    for (let i = 0; i < 3; i++) {
      const row = []
      for (let j = 0; j < 3; j++) {
        const randomIndex = Math.floor(Math.random() * romanNumbers.length)
        const randomRomanNumber = romanNumbers[randomIndex]
        row.push(randomRomanNumber)
      }
      scratchCard.push(row)
    }
    return scratchCard
  }

  const scratchCard = generateScratchGame()
  console.log("🚀 ~ file: ScratchGame.tsx:22 ~ ScratchGame ~ scratchCard:", scratchCard)

  return (
    <div className={styles.scratchGame}>
      {scratchCard.map((row, rowIndex) => (
        <div className={styles.cardRow} key={rowIndex}>
          {row.map((number, columnIndex) => (
            <Card key={columnIndex} cardNumber={number} />
          ))}
        </div>
      ))}
    </div>
  )
}
