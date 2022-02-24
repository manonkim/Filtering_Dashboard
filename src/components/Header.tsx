import Filtering from "./Filtering/Filtering";
import "./Header.scss";
import Toggle from "./Toggle/Toggle";

const Header = () => {
  return (
    <div className='headerWrap'>
      <div className='headerTitle'>들어온 요청</div>
      <div className='headerSubTitle'>
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </div>
      <div className='headerSubWrap'>
        <div>
          <Filtering title={"가공방식"} />
          <Filtering title={"재료"} />
        </div>
        <div>
          <Toggle />
          <span className='headerToggle'>상담 중인 요청만 보기</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
