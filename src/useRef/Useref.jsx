import React from 'react'
import { useRef, useState } from 'react'

//use to manipulate the dom like input focus color etc
const Useref = () => {
    const refElement = useRef("")
    console.log(refElement)
    const [name,setName] = useState("Abhi")

  const Reset = () =>{

    setName("")
    refElement.current.focus()
    refElement.current.value = "Abhishek"
    refElement.current.style.color = "red"


  }


  return (
    <div>
        <input type="text" ref={refElement} value={name} onChange={(e)=>{setName(e.target.value)}} />
        <button>Click me</button>
        <button onClick={Reset} >Reset</button>

    </div>
  )
}

export default Useref