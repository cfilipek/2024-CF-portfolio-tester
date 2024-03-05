import { useEffect, useState } from 'react';
import BoopButton from './BoopButton';
import SingleCard from './SingleCard';

const cardImages = [
  {"src": "/img/memory-icons-01.png", matched: false},
  {"src": "/img/memory-icons-02.png", matched: false},
  {"src": "/img/memory-icons-03.png", matched: false},
  {"src": "/img/memory-icons-04.png", matched: false},
  {"src": "/img/memory-icons-05.png", matched: false},
  {"src": "/img/memory-icons-06.png", matched: false}
]

export default function MemoryGame({ color, audio }) {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
  
    // shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
        .sort(()=> Math.random() - 0.5)
        .map((card)=> ({ ...card, id: Math.random() }))
      
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
    }
  
    // handle a choice
    const handleChoice = ( card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  
    // compare 2 selected cards
    useEffect(()=>{
      if(choiceOne && choiceTwo) {
        setDisabled(true)
  
        if(choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            })
          })
          resetTurn()
        } else {
          setTimeout(()=> resetTurn(), 1000)
        }
      }
    }, [choiceOne, choiceTwo])
  
  
    // reset choices & increase turn
    const resetTurn = () => {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurns => prevTurns + 1)
      setDisabled(false)
    }
  
    // start game automagically
    useEffect(() => {
      shuffleCards()
    }, [])

  return (
    <div className="game-container" style={{color: color, padding: '20px'}}>
    <h1>My Favorite Match</h1>
    <p>Match up the cards in the least number of turns.</p>
    <p>(my fastest turn amount is 9.)</p>
    <BoopButton audio={audio} color={'orange'} changeColor={shuffleCards} label={'New Game'} />
    {/* <button onClick={shuffleCards}>New Game</button> */}
    <div className='card-grid'>
    {cards.map(card => (
      <SingleCard 
       color={color}
       key={card.id} 
       card={card} 
       handleChoice={handleChoice}
       flipped={card === choiceOne || card === choiceTwo || card.matched}
       disabled={disabled}
      />
    ))}
    </div>
    <p>Turns: {turns}</p>
  </div>
  )
}
