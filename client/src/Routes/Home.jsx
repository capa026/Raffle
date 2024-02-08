import "./routes.css";
import { useFetch } from "../hooks/useFetch";
import Table from "../components/Table";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, loading, error, reFetch } = useFetch("tables");

  if (loading) return;

  return (
    <div className="home">
      {data?.length === 0 && (
        <h1 className="message">No hay datos que mostrar...</h1>
      )}
      <div className="container wrapper">
        {data.map((table, i) => (
          <Table
            name={table.name}
            availableNumbers={table.availableNumbers}
            unAvailableNumbers={table.unAvailableNumbers}
            key={i}
            id={table._id}
            reFetch={reFetch}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
