import "./HangManDrawing.css";

interface HangManDrawingProps {
	numberOfGuesses:number
}

function HangManDrawing({numberOfGuesses}:  HangManDrawingProps): JSX.Element {

    const head = (
        <div
          style={{
            width: "24%",
            height: "19%",
            borderRadius: "100%",
            // border: "10px solid black",
            position: "absolute",
            top: "12.5%",
            right: "-10%",
            backgroundColor: "pink",
            zIndex:"99"
          }}
        />
      )
    const hair = (
        <div
          style={{
            width: "28%",
            height: "15%",
            borderRadius: "60%",
            position: "absolute",
            backgroundColor: "brown",
            top: "10%",
            right: "-12.2%",
            zIndex:"1"

          }}
        />
      )

    const eyes = (
      <div>
        <div
          style={{
            width: "4%",
            height: "2%",
            backgroundColor: "blue",
            borderRadius: "100%",
            border: "1px solid black",
            position: "absolute",
            top: "17.5%",
            right: "-5%",
            zIndex:"99"
          }}
          />
            <div
          style={{
            width: "4%",
            height: "2%",
            borderRadius: "100%",
            backgroundColor: "blue",
            border: "1px solid black",
            position: "absolute",
            top: "17.5%",
            right: "3.6%",
            zIndex:"99"
           }}
        />
       </div>
      )

    const mouth = (
        <div
          style={{
            width: "8%",
            height: "6%",
            borderRadius: "100%",
            backgroundColor: "red",
            border: "0.2px solid black",
            position: "absolute",
            top: "22.5%",
            right: "-2%",
            zIndex:"99"            
          }}
        />
      )
      
    const body = (
        <div
          style={{
            width: "3.33%",
            height: "26%",
            background: "black",
            position: "absolute",
            top: "30%",
            right: 0,
          }}
        />
      )
      
      const rightArm = (
        <div
          style={{
            width: "33.33%",
            height: "2.5%",
            background: "black",
            position: "absolute",
            top: "37.5%",
            right: "-33.3%",
            rotate: "-30deg",
            transformOrigin: "left bottom",
          }}
        />
      )
      
      const leftArm = (
        <div
          style={{
            width: "33.33%",
            height: "2.5%",
            background: "black",
            position: "absolute",
            top: "37.5%",
            right: "3.33%",
            rotate: "30deg",
            transformOrigin: "right bottom",
          }}
        />
      )
      
      const rightLeg = (
        <div
          style={{
            width: "33.33%",
            height: "2.5%",
            background: "black",
            position: "absolute",
            top: "52.5%",
            right: "-30%",
            rotate: "60deg",
            transformOrigin: "left bottom",
          }}
        />
      )
      
      const leftLeg = (
        <div
        style={{
          width: "33.33%",
          height: "2.5%",
          background: "black",
          position: "absolute",
          top: "52.5%",
          right: 0,
          rotate: "-60deg",
          transformOrigin: "right bottom",
        }}
        />
        )

        const feet = (
          <div>

        
          <div
            style={{
              width: "3.33%",
              height: "6.25%",
              background: "black",
              position: "absolute",
              top: "70%",
              right: "-16%",
              rotate: "60deg",
              transformOrigin: "left bottom",
              backgroundColor: "green"
            }}
          />
           <div
            style={{
              width: "3.33%",
              height: "6.25%",
              background: "black",
              position: "absolute",
              top: "72.5%",
              right: "14.6%",
              rotate: "300deg",
              transformOrigin: "left bottom",
              backgroundColor: "green"
            }}
          />
            </div>
        )

      const bodyParts = [head, body, rightArm, leftArm,  rightLeg, leftLeg, feet, hair, eyes, mouth]

    return (
        <div  className="HangManDrawing">
             {bodyParts.slice(0, numberOfGuesses)}
             {/* {bodyParts} */}
        <div
         style={{
          height: "12.5%",
          width: "3.33%",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "2.5%",
          width: "60%",
          background: "black",
          marginLeft: "40%",
        }}
      />
      <div
        style={{
          height: "100%",
          width: "3.33%",
          background: "black",
          marginLeft: "40%",
          marginTop: "-3.33%",
        }}
      />
      <div style={{ height: "2.5%", width: "83%", background: "black" }} />
        </div>
    );
}

export default HangManDrawing;
