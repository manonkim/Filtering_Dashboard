import Filtering from "../Filtering/Filtering";
import Toggle from "../Toggle/Toggle";
// import Toggle from "../Toggle/Toggle";
import "./Header.scss";

const Header = () => {
  return (
    <div className='headerWrap'>
      <div className='headerTitle'>들어온 요청</div>
      <div className='headerSubTitle'>
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </div>
      <div className='headerSubWrap'>
        <div className='headerFilterWrap'>
          <Filtering title={"가공방식"} />
          <Filtering title={"재료"} />
          <div className='refreshWrap'>
            <img
              className='refresh'
              src='../../img/refresh.png'
              alt='refresh'
            />
            <div className='refreshtext'>필터링 리셋</div>
          </div>
        </div>

        <div className='toggleWrap'>
          <Toggle />
          <span className='headerToggle'>상담 중인 요청만 보기</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
