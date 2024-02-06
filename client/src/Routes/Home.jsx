import "./routes.css";
import { useFetch } from "../hooks/useFetch";
import Table from "../components/Table";

const Home = () => {
  const { data, loading, error } = useFetch("tables");

  if (loading) return;
  return (
    <div className="home">
      {data?.length === 0 && (
        <h1 className="message">No hay datos que mostrar...</h1>
      )}
      <div className="container wrapper">
        {data.map((table, i) => (
          <Table name={table.name} data={table.availableNumbers} key={i} />
        ))}
      </div>
    </div>
  );
};
export default Home;
