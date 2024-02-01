import "./routes.css";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch("tables");

  if (loading) return;
  return (
    <div className="home">
      <div className="container wrapper">
        <div className="table">
          {data[0]?.availableNumbers.map((item, i) => (
            <div className="square" key={i}>
              <h1>{item.n}</h1>
              <div className="tooltip">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
