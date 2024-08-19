import whiteTheme from '../images/icon-sun.svg'
import darkTheme from '../images/icon-moon.svg'

function Header({theme, dispatch}) {
  return (
    <div className="header">
      <h1>TODO</h1>
      <button onClick={() => dispatch({type: 'changeTheme'})}>
        <img src={theme ? darkTheme : whiteTheme} alt="" />
      </button>
    </div>
  )
}

export default Header