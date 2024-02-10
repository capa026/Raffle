import "./routes.css";
import { useFetch } from "../hooks/useFetch";
import Table from "../components/Table";
import { ThreeCircles } from "react-loader-spinner";

const Home = () => {
  const { data, loading, error, reFetch } = useFetch("tables");

  if (loading)
    return (
      <div className="loader">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#97213a"
          ariaLabel="three-circles-loading"
        />
        Cargando...
      </div>
    );

  return (
    <div className="home">
      {data?.length === 0 && (
        <h1 className="message">No hay datos que mostrar...</h1>
      )}
      <div className="container wrapper">
        {data.map((table, i) => (
          <div className="table--container" key={i}>
            <Table
              name={table.name}
              availableNumbers={table.availableNumbers}
              unAvailableNumbers={table.unAvailableNumbers}
              id={table._id}
              reFetch={reFetch}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
