import Todo_container from "./components/Todo_container"
import Todo from "./components/Todo"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import DisplayList from "./components/DisplayList"
import FooterList from "./components/FooterList"



import { useReducer } from "react"


const initialState = {
  todoList: [],
  theme: true,
  sortList: []
}


function reducer(state, action) {
  switch(action.type) {
    case 'changeTheme':
      return {
        ...state, 
        theme: !state.theme
      }
    case 'addTask':
      console.log(action.payload)

      return {
        ...state, 
        todoList: [action.payload, ...state.todoList]
      }
    case 'completeTask':
      return {
        ...state,
        todoList: state.todoList.map((el, idx) => {
          if(idx === action.payload.ind) {
            return {...el, completed: !el.completed}
          }
          return el
        })
      }
    
    case 'removeTask':
      return {
        ...state, 
        todoList: state.todoList.filter((_, idx) => idx !== action.payload.ind)
      }
    
    case 'clearCompleted':
      return {
        ...state, 
        todoList: state.todoList.filter((ele) => ele.completed === false)
      }

    default: 
    throw new Error('Action unknown')
  }
}




function App() {
  const [{todoList, theme}, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Todo_container theme={theme}>
        <Todo>
          <Header theme={theme} dispatch={dispatch}/>
          <AddTask dispatch={dispatch} theme={theme}/>
          <DisplayList todoList={todoList} dispatch={dispatch} theme={theme}/>
          
        </Todo>
      </Todo_container>
    </>
  )
}


export default App

