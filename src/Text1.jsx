import React, { useState } from "react"
import TextScramble from "@twistezo/react-text-scramble"
import "./Example.scss"

const scrambleTexts = [
  "KGEC-CSE Department",
 
]

const Example = () => {
  const [pause, setPause] = useState(false)

  return (
    <>
      <div className="Example">
        <span className="Example__blinker"></span>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={10}
          nextLetterSpeed={100}
          pauseTime={5500}
          paused={pause}
        />
      </div>

      
    </>
  )
}

export default Example

