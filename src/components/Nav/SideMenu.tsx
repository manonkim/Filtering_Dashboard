import './SideMenu.scss';

export default function SideMenu(props: any) {
  return (
    <div className="backdrop" onClick={props.close}>
      <div className="modal">
        <header className="sideMenuHeader">
          <img
            className="sidemenulogo"
            src="../../img/sidemenulogo.png"
            alt="sidemenulogo"
          />
        </header>
        <div className="sideMenuWrap">
          <img
            className="sideMenuIcon"
            src="../../img/sideMenu.png"
            alt="sidemenu"
          />
          <span className="sideMenu">파트너정밀가공</span>
        </div>
        <div className="sideMenulogout">로그아웃</div>
      </div>
    </div>
  );
}
