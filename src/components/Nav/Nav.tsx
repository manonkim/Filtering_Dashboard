import SideMenu from './SideMenu';
import { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [onMenu, setOnMenu] = useState<boolean>(false);
  const openMenu = () => {
    setOnMenu(!onMenu);
  };
  const closeMenu = () => {
    setOnMenu(false);
  };

  return (
    <>
      {onMenu && <SideMenu close={closeMenu} />}
      <div className="navWrap">
        <img
          className="mobilemenu"
          src="../../img/menu.png"
          alt="menu"
          onClick={openMenu}
        />
        <img className="logo" src="../../img/logo.png" alt="logo" />
        <div className="sideWrap">
          <img className="icon" src="../../img/Vector.png" alt="icon" />
          <div className="menu">A 가공 업체</div>
          <img className="divider" src="../../img/divider.png" alt="divider" />
          <div className="menu">로그아웃</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
