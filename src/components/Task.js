import deleteIcon from '../images/icon-cross.svg'


function Task({ele, ind, dispatch, theme}) {

  const showMark = {
    display: `${ele.completed ? '' : 'none'}`,
  }

  const taskStyle = {
    backgroundColor:  `${theme ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'}`,
    color:  `${theme ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'}`
  }

  const lineText = {
    textDecoration: `${ele.completed ? 'line-through' : 'none'}`,
    color: `${ theme ? (ele.completed ? 'hsl(233, 11%, 84%)' : 'hsl(235, 21%, 11%)') : (ele.completed ? 'hsl(233, 11%, 84%)' : 'hsl(0, 0%, 98%)') }`,
  }

  
  const checkBg = {
    backgroundImage: `${ele.completed ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : ''}`
  }

  function changeInput() {
    dispatch({type: 'completeTask', payload: {ele, ind}})    
  }

  return (
    <div className="todolist__ele--item" >
      <label className='todolist__ele--item_label'>
        <div className='todolist__ele--item_label-check'>
          <div style={checkBg} className="todolist__ele--item_label-check--img">
            <svg style={showMark} xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
          </div>

          <input type="checkbox" name="task" onChange={changeInput}/>
          <p style={lineText}>{ele.todoInput}</p>
        </div>
        <button onClick={() => dispatch({type: 'removeTask', payload: {ele, ind}})}><img src={deleteIcon} alt="" /></button>
      </label>
    </div>
  )
}

export default Task


