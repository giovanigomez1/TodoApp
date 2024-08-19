




function FooterList({todoList, dispatch}) {
  


  const itemsLeft = todoList.reduce((acc, ele) => {
    console.log(ele.completed)
    return acc + (!ele.completed)
  }, 0)



  

  return (
    <div className="footer">
      <div className="footer__items-left">
        <p>{itemsLeft} items left</p>
      </div>
      <div className="footer__items-sort">
        <button onClick={() => dispatch({type: 'showAll'})}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="footer__items-clear">
        <button onClick={() => dispatch({type: 'clearCompleted'})}>Clear Completed</button>
      </div>
    </div>
  )
}


export default FooterList