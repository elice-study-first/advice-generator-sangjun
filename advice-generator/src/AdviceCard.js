import React, {useState, useEffect} from 'react'
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
import axios from "axios"

export const AdviceCard = () => {
  const [advice, setAdvice] = useState("")
  const getAdvice = async() => {
    //{"slip": { "id": 104, "advice": "Do, or do not. There is no try."}}
    const response = await axios.get("https://api.adviceslip.com/advice");
    // console.log(response)
    const advice = await response.data.slip;
    setAdvice(advice)
  }

  useEffect(() => {
    getAdvice()
  }, [])
  return (
    <div className='card'>
        <p>ADVISE #{advice.id}</p>
        <h2>"{advice.advice}"</h2>
        <img src={dividerDesktop} className='divider-desktop' alt='divider' />
        <img src={dividerMobile} className='divider-mobile' alt='divider' />
        <div className='dice' onClick={getAdvice}>
            <img src={dice} alt='dice' />
        </div>
    </div>
  )
}
