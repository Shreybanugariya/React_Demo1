import React, { useState } from 'react'

export default function TextForms(props) {
  console.log('here', props)
  const handleUpClick = (event) => {
    let newText = text.toUpperCase()
    setText(newText)
    event.preventDefault()
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here')

  return (
   <>
   <div className='container'>
    <h1 style={{ color: props.mode === 'light' ? '#022b53cf' : 'white' } }>{props.heading}</h1>
    <div className='mb-3'>
      <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#022b53cf', color: props.mode === 'light' ? '#022b53cf' : 'white', } } id='textBox' rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Conver to UpperCase</button>
   </div>

   <div className='container my-3' style={{ color: props.mode === 'light' ? '#022b53cf' : 'white' } }>  
    <h2>Your Text Summary</h2>
    <p>{text.split(' ').length} Words and {text.length} Character</p>
    <p>{0.008 * text.split(' ').length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : 'Exter text to Preview'}</p>
   </div>
   </>
  )
}
