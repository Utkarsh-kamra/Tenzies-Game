import { useState, useEffect } from 'react'
import Dice from "./components/dice"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import './App.css'
 
function App() {

  const [dice, setDice] = useState(()=> generateAllNewDice())

  const gameWon = dice.every(die => die.isHeld) &&
      dice.every(die => die.value === dice[0].value)

  function generateAllNewDice(){
    return new Array(10)
        .fill(0)
        .map(() => ({
          value: Math.ceil(Math.random() *6), 
          isHeld: false,
          id: nanoid()
        }))
  }

  function handleClick(){
    if(!gameWon){
      setDice(prevDice => prevDice.map(die => die.isHeld ? 
              die :
              {...die, value:Math.ceil(Math.random() *6)}
      ))
    }
    else{
      setDice(generateAllNewDice())
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => 
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))
  }
  
  const diceElements = dice.map(diceObj => 
      <Dice 
        key={diceObj.id} 
        value={diceObj.value} 
        hold={()=> holdDice(diceObj.id)}
        isHeld={diceObj.isHeld}
        />)


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
      
  useEffect(() => {
          const handleResize = (() => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
          })
      
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
        }, [])
      

  return (
    <main>
      {gameWon && <Confetti width={windowWidth} height={windowHeight} />}
      <div aria-live='polite' className='sr-only'>
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="app-title" >Tenzies</h1>
      <p className="app-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {diceElements}
      </div>
      <button onClick={handleClick}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
