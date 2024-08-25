import Todo_container from "./components/Todo_container"
import Todo from "./components/Todo"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import DisplayList from "./components/DisplayList"
import FooterList from "./components/FooterList"


import { useEffect, useReducer } from "react"


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

    case 'setInitialState':
      console.log(action.payload)
      return {
        ...state,
        todoList: [...action.payload.data],
        theme: action.payload.theme 
      }

    default: 
    throw new Error('Action unknown')
  }
}


function App() {
  const [{todoList, theme}, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    if(localStorage.getItem('list')) {
      dispatch({
        type: 'setInitialState', 
        payload: {
          data: JSON.parse(localStorage.getItem('list')), 
          theme: JSON.parse(localStorage.getItem('theme'))
        }
      })
    } else {
      return
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoList))
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [todoList, theme])

  return (
    <>
      <Todo_container theme={theme}>
        <Todo>
          <Header theme={theme} dispatch={dispatch}/>
          <AddTask dispatch={dispatch} theme={theme}/>
          <DisplayList todoList={todoList} dispatch={dispatch} theme={theme}/>
          
          <FooterList />
        </Todo>
      </Todo_container>
      
    </>
  )
}


export default App

