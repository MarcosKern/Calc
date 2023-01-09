import React, { useContext, useState } from 'react'
import MyContext from '../context/Context'
import { numpad, operators } from '../Services/Pad'
import '../css/pad.css'

export default function CalculatorNumpad() {
  const { result, setResult } = useContext(MyContext);
  const [ disableOperators, setDisableOperators ] = useState(true);
  const [ disableNumbers, setDisableNumbers ] = useState(false);

  return (
    <section className='padContainer'>
      <div className='numpad'>
        {
          numpad.map((object) => {
            return(
              <button
                key={ object.charactere }
                className='key'
                disabled={ disableNumbers }
                onClick={ (event) => {
                  setResult(`${result}${event.target.innerText}`)
                  setDisableOperators(false)
                } }
              >
                { object.charactere }
              </button>
            )
          })
        }
        <button className='key' onClick={ () => {
          setResult(eval(result))
          setDisableNumbers(true)
        } }>=</button>
        <button className='key' onClick={ () => {
          setResult('')
          setDisableNumbers(false)
        } }>C</button>
      </div>
      <div className='operator'>
        {
          operators.map((object) => {
            return(
              <button
                key={ object.charactere }
                disabled={ disableOperators }
                className='operatorKey'
                onClick={ (event) => {
                  setResult(`${result} ${event.target.innerText} `)
                  setDisableOperators(true)
                  setDisableNumbers(false)
                } }
              >
                { object.charactere}
              </button>
            )
          })
        }
      </div>
    </section>
  )
}
