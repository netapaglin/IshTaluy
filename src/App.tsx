import React, { useCallback, useEffect } from "react"
import { useState } from "react"
import words from "./wordList.json"
import "./App.css";
import HangManDrawing from "./Components/HangManDrawing/HangManDrawing";
import HangManWord from "./Components/HangManWord/HangManWord";
import Keyboard from "./Components/Keyboard/Keyboard";
import { BsArrowClockwise } from "react-icons/bs";

function App() {

  const randomArr = Math.floor(Math.random() * words.length)

  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[randomArr][Math.floor(Math.random() * words.length) + 1]
    // return words[Math.floor(Math.random() * words.length)]
  })

  const [wordsFamily , setEordsFamily]= useState(()=>{
    return words[randomArr][0]
  })

  const [guessedLetters, setGuessedLetters]= useState<string[]>([])
  const [end, setEnd]= useState<boolean>(false)
 
  let sofiyut = (letter : string)=> {
    if (letter === 'ף' || letter === 'ך' || letter === 'ץ' || letter === 'ן' || letter === 'ם')
    return false
    else return true
  }
  const incorrectLetters = guessedLetters.filter(
    letter => sofiyut(letter) && !wordToGuess.includes(letter)
  )

  console.log("incorrectLetters :  " + incorrectLetters)
  console.log("incorrectLetters.length :  " + incorrectLetters.length)

  const isLoser = incorrectLetters.length >= 10;
  const isWinner = wordToGuess
  .split("")
  .every(letter => guessedLetters.includes(letter))
  
  const endGame =  function(){
    if(isLoser){
      alert(`המילה היתה ${wordToGuess} ,נסי שוב`)
    }
    if(isWinner){
      alert("את אלופה")
    }
  }

  function refreshPage() {
    window.location.reload();
  }

  const addGuessedLetter = useCallback((letter:string)=>{
    if(guessedLetters.includes(letter)|| isLoser || isWinner) return;
    setGuessedLetters(currentLetters =>[...currentLetters, letter])
    },[guessedLetters, isLoser, isWinner])
  console.log(guessedLetters)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)   
    }
    document.addEventListener("keypress", handler)
    if (isLoser || isWinner){setEnd(true)}
    console.log("end1: " + end)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  
  console.log(wordToGuess)
  console.log("end2: " + end)
  if (end){endGame()}
   

  
  return (
    <div  
    className="App">
    <BsArrowClockwise id="refresh" onClick={refreshPage}>משחק חדש</BsArrowClockwise>
    <div id="drawing">
    <HangManDrawing numberOfGuesses={incorrectLetters.length} />
    </div>
    <div id="word">
    <HangManWord 
    wordsFamily = {wordsFamily}
    reveal ={isLoser}
    guessedLetters={guessedLetters} 
    wordToGuess={wordToGuess} />
    </div>
    <div id="keyboard">
    <div style={{ alignSelf: "stretch" }}>
    <Keyboard
    disabled = {isLoser || isWinner}
    activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
    inactiveLetter = {incorrectLetters}
    addGuessedLetter = {addGuessedLetter}
    />
    </div>
    </div>
    
    </div>

  )
}

export default App
