import Filtering from "./Filtering/Filtering";
import "./Header.scss";

const Header = () => {
  return (
    <div className='headerWrap'>
      <div className='headerTitle'>들어온 요청</div>
      <div className='headerSubTitle'>
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </div>
      <Filtering title={"가공방식"} />
      <Filtering title={"재료"} />
    </div>
  );
};

export default Header;
