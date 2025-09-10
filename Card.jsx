import React from 'react'

const Card = (props) => {

    console.log(props);
    

  return (
    <div className='p-5'>
        <div
        className="h-30 w-30 bg-indigo-500/60 rounded-3xl"
        ><h1>{props.data.name}</h1>
        <h4>{props.data.email}</h4>
        <p><b>{props.data.age}</b></p></div>

    </div>
  )
}

export default Card