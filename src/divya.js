import React from 'react'
import {useState} from 'react'


function Divya(){
    const [initialval, myfunction] = useState("hello foo")
  
    return (
        <>
        I am Going!!! Byee
        {initialval}
        </>
    )
}

export default Divya