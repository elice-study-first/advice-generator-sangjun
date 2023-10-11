import React from 'react'
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'

export const AdviceCard = () => {
  return (
    <div className='card'>
        <p>ADVISE #1</p>
        <h2>This is an advice</h2>
        <img src={dividerDesktop} className='divider-desktop' alt='divider' />
        <div className='dice'>
            <img src={dice} alt='dice' />
        </div>
    </div>
  )
}
