import "./Filtering.scss";

const Filtering = (props: { title: string }) => {
  return (
    <div className='filterBox'>
      <div className='filterWrap'>
        <p className='filterTitle'>{props.title}</p>
        <img className='dropdown' src='../../img/dropdown.png' alt='dropdown' />
      </div>
    </div>
  );
};

export default Filtering;
