import React from 'react'
import './City.css'

// const City = (props) => {
//   return (
//     <p className='city'>Hello, I am in {props.city}. It is {props.feature}.</p>
//   )
// }
const City = ({city, feature}) => {
  return (
    <p className='city'>Hello, I am in {city}. It is {feature}.</p>
  )
}

export default City