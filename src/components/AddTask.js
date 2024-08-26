import { useState } from "react"

function AddTask({dispatch, theme}) {
  const [textInput, setTextInput] = useState('')

  function capitalize(text) {
    return text.split('')[0].toUpperCase() + text.slice(1)
  }

  function submitTask(e) {
    e.preventDefault()
    if(textInput === '') return
    dispatch({type: 'addTask', payload: {todoInput: capitalize(textInput), completed: false}})
    setTextInput('')
  }
  
  const inputTheme = {
    backgroundColor:  `${theme ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'}`,
    color:  `${theme ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'}`
  }

  return (
    <form style={inputTheme} className="add__task" onSubmit={submitTask}>
      <div className="add__task--check"></div>
      <input 
        type="text" 
        placeholder='Create a new todo..'
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
        style={inputTheme}
      />
    </form>
  )
}

export default AddTask