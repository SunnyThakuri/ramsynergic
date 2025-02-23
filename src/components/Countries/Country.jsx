import React from 'react'
import { useParams } from 'react-router-dom'
import Croatia from './Croatia/Crotia'

function Country() {
    const {name}= useParams()
  return (
    <div>
      Country {name}
      <Croatia
      country={name}
      />
    </div>
  )
}

export default Country
