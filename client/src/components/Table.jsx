const Table = ({ name, data }) => {
  return (
    <div className="table">
      <h1>{name}</h1>

      <div className="table-content">
        {data?.map((item, i) => (
          <div className="square" key={i}>
            <h1>{item.n}</h1>
            <div className="tooltip">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Table;
