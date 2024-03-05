import './SingleCard.css'

export default function SingleCard({ cardCover, card, handleChoice, flipped, disabled, color }) {

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }

  return (
        <div className='card'>
          <div className={flipped ? "flipped" : ""}>
            <img 
            style={{borderColor: color}}
            className='front' 
            src={card.src}
             alt="card front"/>
            <img 
            style={{borderColor: color}}
            className='back' 
            src={cardCover} 
            onClick={handleClick} 
            alt="card back"/>
          </div>
        </div>
  )
}
