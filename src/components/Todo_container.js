import { useState, useEffect } from 'react'

import darkImg from '../images/bg-desktop-dark.jpg'
import lightImg from '../images/bg-desktop-light.jpg'
import lightImgMobile from '../images/bg-mobile-light.jpg'
import darkImgMobile from '../images/bg-mobile-dark.jpg'


function Todo_container({children, theme}) {

  const [tabletView, setTabletView] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 700) setTabletView(true)
  }, [])

  const headerStyle = {
    backgroundImage: `url(${theme ? (tabletView ? lightImgMobile : lightImg) 
      : (tabletView ? darkImgMobile : darkImg)})`,
    backgroundColor: `${theme ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)'}`
  }

  
  return (
    <div className="container" style={headerStyle}>
      {children}
    </div>
  )
}

export default Todo_container