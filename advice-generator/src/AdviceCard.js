import React, {useState, useEffect} from 'react'
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
import axios from "axios"

export const AdviceCard = () => {
  const [advice, setAdvice] = useState("")
  const getAdvice = async() => {
    const response = await axios.get("https://api.adviceslip.com");
    console.log(response)
  }

  useEffect(() => {
    getAdvice()
  }, [])
  return (
    <div className='card'>
        <p>ADVISE #1</p>
        <h2>This is an advice</h2>
        <img src={dividerDesktop} className='divider-desktop' alt='divider' />
        <img src={dividerMobile} className='divider-mobile' alt='divider' />
        <div className='dice' onClick={getAdvice}>
            <img src={dice} alt='dice' />
        </div>
    </div>
  )
}
