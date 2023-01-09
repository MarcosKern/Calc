import React, { useContext } from 'react'
import MyContext from '../context/Context'
import '../css/result.css'

export default function Result() {
  const { result } = useContext(MyContext);

  return (
    <div className='screen'>{ result }</div>
  )
}
