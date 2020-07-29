import React, { useState } from 'react'

const Person = (props) => {
  if(props.person.show) {
    return (
      <li>{props.person.name}: {props.person.number}</li>
    )
  } else {
    return null
  }
}

export default Person
