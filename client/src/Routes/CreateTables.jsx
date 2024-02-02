import { FilePlus } from "lucide-react";
import { useState } from "react";

const CreateTables = () => {
  const [info, setInfo] = useState({
    name: "",
    from: "",
    to: "",
  });

  const [table, setTable] = useState({
    name: undefined,
    availableNumbers: [],
  });

  const [error, setError] = useState("");

  let availableNumbers = [];

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCreate = (e) => {
    if (info.name == "" || info.from <= 0 || info.from == "" || info.to == "") {
      setError(
        "Verifica los campos, no pueden estar vacios, y el inicio tiene que ser de al menos 1"
      );
      return;
    } else {
      setError("");
    }

    for (let i = info.from; i <= info.to; i++) {
      let row = { n: parseInt(i), name: "" };
      availableNumbers.push(row);
    }
    setTable((prev) => ({
      name: info.name,
      availableNumbers: availableNumbers,
    }));
    console.log(table);

    handleSubmit(availableNumbers);
  };
  const handleSubmit = (table) => {};
  return (
    <div className="create--tables">
      <div className="container">
        <div className="form">
          <input
            type="text"
            placeholder="Nombre de la rifa"
            id="name"
            onChange={handleChange}
          />
          <div className="wrapper">
            <input
              type="number"
              placeholder="Inicio"
              id="from"
              onChange={handleChange}
            />
            <span>Al</span>
            <input
              type="number"
              placeholder="Fin"
              id="to"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleCreate}>
            <FilePlus />
            Crear
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
};
export default CreateTables;
