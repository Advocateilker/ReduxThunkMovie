import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <Link to='/'>
        <header className='p-2'>
        <img width={100} height={101} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png' alt="" />
    </header>
    
    </Link>

  )
}

export default Header