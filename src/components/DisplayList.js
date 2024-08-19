import Task from "./Task"
import { useState } from "react"







function DisplayList({todoList, dispatch, theme}) {  

  const listStyle = {
    backgroundColor:  `${theme ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'}`,
    color:  `${theme ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'}`
  }
  
  
  const itemsLeft = todoList.reduce((acc, ele) => {
    return acc + (!ele.completed)
  }, 0)

  const [display, setDisplay] = useState('all')
  const renderList = todoList?.map((ele, ind) => {
    return (
      <li className="todolist__ele" key={ind}>
        <Task ele={ele} ind={ind} dispatch={dispatch} theme={theme}/>
      </li>
    )
  })
  const active = todoList?.filter((ele, _) => ele.completed !== true)
    .map((ele, ind) => {
      return (
        <li className="todolist__ele" key={ind}>
          <Task ele={ele} ind={ind} dispatch={dispatch} theme={theme}/>
        </li>
      )
    })
  const completed = todoList?.filter((ele, _) => ele.completed !== false)
    .map((ele, ind) => {
      return (
        <li className="todolist__ele" key={ind}>
          <Task ele={ele} ind={ind} dispatch={dispatch} theme={theme}/>
        </li>
      )
    })


 


  return (
    <>
      <ul className="todolist" style={listStyle}>
        {display === 'all' ? renderList : display === 'active' ? active : completed}
      </ul>
    
      <div className="footer" style={listStyle}>
        <div className="footer__items-left">
          <p>{itemsLeft} items left</p>
        </div>
        <div className="footer__items-sort">
          <button className={`footer__items-sort_all ${display === 'all' ? 'selected' : ''}`} onClick={() => setDisplay('all')}>All</button>
          <button className={`footer__items-sort_active ${display === 'active' ? 'selected' : ''}`} onClick={() => setDisplay('active')}>Active</button>
          <button className={`footer__items-sort_completed ${display === 'completed' ? 'selected' : ''}`} onClick={() => setDisplay('completed')}>Completed</button>
        </div>
        <div className="footer__items-clear">
          <button onClick={() => dispatch({type: 'clearCompleted'})}>Clear Completed</button>
        </div>
      </div>
    </>
  )
}

export default DisplayList