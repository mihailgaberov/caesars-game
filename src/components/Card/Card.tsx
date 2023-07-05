import { Sprite, Stage } from '@pixi/react'
import { useState } from 'react'


interface Props {
  cardNumber: string
}

export function Card({ cardNumber }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleToggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }} onclick={handleToggleFlip}>
      <Sprite
        image="/backside_card.jpeg"
        scale={{ x: 0.5, y: 0.5 }}
        anchor={0.5}
        x={150}
        y={150}
      />
    </Stage>
  )
}
