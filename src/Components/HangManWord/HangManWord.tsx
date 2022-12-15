import "./HangManWord.css";

interface HangManWordProps {
	guessedLetters:string[]
    wordToGuess: string
    wordsFamily: string
    reveal?:boolean
}



function HangManWord({wordsFamily, wordToGuess, guessedLetters, reveal=false}: HangManWordProps): JSX.Element {
   
  
    return (
        <div className="HangManWord">
            <div id = "family">
                <p>{wordsFamily}</p>
            </div>
            <div id="word">
			{wordToGuess.split("").map((letter , index)=>(
                <span id="letter" key={letter}>
                    <span key={index} 
                    style={{
                        visibility:
                        guessedLetters.includes(letter) || reveal
                        ? "visible"
                        : "hidden",
                        color:
                        !guessedLetters.includes(letter) && reveal ? "#FA3980" : "#142B70",
                    }}
                    >
                    {letter}</span>
                </span>
            ))}
            </div>
        </div>
    );
}

export default HangManWord;
