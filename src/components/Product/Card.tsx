import datatype from '../../type/types';
import './Card.scss';

const Card: React.FC<{ data: any }> = ({ data }) => {
  const status: any = data.status;

  return (
    <div className="card">
      <div className="titleWrap">
        <h2 className="cardTitle">{data.title}</h2>
        {status === '상담중' && <div className="cardStatus">상담중</div>}
      </div>
      <h3 className="cardClient">{data.client}</h3>
      <p className="cardDue">{data.due}까지 납기</p>
      <div className="divider"></div>
      <dl>
        <div>
          <dt>도면개수</dt>
          <dd>{data.count}개</dd>
        </div>
        <div>
          <dt>총 수량</dt>
          <dd>{data.amount}개</dd>
        </div>
        <div>
          <dt>가공방식</dt>
          <dd>{data.method}</dd>
        </div>
        <div>
          <dt>재료</dt>
          <dd>{data.material}</dd>
        </div>
      </dl>

      <button className="card-btn-L">요청 내역 보기</button>
      <button className="card-btn-R">채팅하기</button>
    </div>
  );
};

export default Card;
