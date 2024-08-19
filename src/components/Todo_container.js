import darkImg from '../images/bg-desktop-dark.jpg'
import lightImg from '../images/bg-desktop-light.jpg'


function Todo_container({children, theme}) {

  const headerStyle = {
    backgroundImage: `url(${theme ? lightImg : darkImg})`,
    backgroundColor: `${theme ? 'white' : 'black'}`
  }



  return (
    <div className="container" style={headerStyle}>
      {children}
    </div>
  )
}

export default Todo_container