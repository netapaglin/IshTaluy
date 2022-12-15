import "./Keyboard.css";

interface KeyboardProps {
    disabled? :boolean
	activeLetter:string[]
    inactiveLetter: string[]
    addGuessedLetter:(letter:string)=> void
}

function Keyboard({disabled = false ,activeLetter,inactiveLetter,addGuessedLetter}: KeyboardProps): JSX.Element {
   const keys = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת"
]

function handleSofiyut(key:string){
    addGuessedLetter(key)
    if (key === "כ"){
        key = "ך"
        addGuessedLetter(key) 
     } else if (key === "מ"){
            key = "ם"
            addGuessedLetter(key) 
     }else if (key === "נ"){
                key = "ן"
               addGuessedLetter(key) 
      }else if (key === "צ"){
                    key = "ץ"
                    addGuessedLetter(key) 
       }else if(key === "פ"){
                        key = "ף"
                        addGuessedLetter(key) 
      }
   
}


    return (
        <div className="Keyboard">
			{keys.map(key =>{
                     const isActive = activeLetter.includes(key)
                     const isInactive = inactiveLetter.includes(key)
                return (<button
                    key={key}
                    onClick={()=>handleSofiyut(key)}
                    className={`btn ${isActive? "active" : ""} 
                    ${isInactive ? "inactive" : ""
                      }`}
                      disabled={isActive || isActive || disabled}
                    >{key}</button>)
            })}
        </div>
    );
}

export default Keyboard;
