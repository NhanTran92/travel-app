import React, { useState } from 'react'

export default function Travel() {

  const [currentMenu, setCurrentMenu] = useState('menu1');

  const handleClick = (menuId) => {
    setCurrentMenu(menuId);
  };

  return (
    <div >
      <div className={`style ${currentMenu === 'menu1' ? 'active' : ''}`} onClick={() => handleClick('menu1')}>
        <h3 className="menu" style={{ cursor: "pointer"}}>Du lịch trong nước</h3>
      </div>

      {currentMenu === 'menu1' && (
        <div className="container" >
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        </div>
      )}

      <div className={`style ${currentMenu === 'menu2' ? 'active' : ''}`} onClick={() => handleClick('menu2')}>
        <h3 className="menu" style={{ cursor: "pointer"}}>Du lịch nước ngoài</h3>
      </div>

      {currentMenu === 'menu2' && (
        <div className="container">
          <ul>
            <li>Menu item A</li>
            <li>Menu item B</li>
            <li>Menu item C</li>
          </ul>
        </div>
      )}
    </div>
  )
}


