import "./Card.scss";

const Card: React.FC = () => {
  return (
    <div className='cardWrap'>
      <div className='card'>
        <div className='title-wrap'>
          <h2 className='card-title'>비행기 시제품 제작</h2>
          <div className='card-status'>상담중</div>
        </div>
        <h3 className='card-client'>B 고객사</h3>
        <p className='card-due'>2020.12.13까지 납기</p>
        <div className='divider'></div>
        <dl>
          <div>
            <dt>도면개수</dt>
            <dd>2개</dd>
          </div>
          <div>
            <dt>총 수량</dt>
            <dd>100개</dd>
          </div>
          <div>
            <dt>가공방식</dt>
            <dd>선반</dd>
          </div>
          <div>
            <dt>재료</dt>
            <dd>탄소강,강철</dd>
          </div>
        </dl>

        <button className='card-btn-L'>요청 내역 보기</button>
        <button className='card-btn-R'>채팅하기</button>
      </div>
    </div>
  );
};

export default Card;
