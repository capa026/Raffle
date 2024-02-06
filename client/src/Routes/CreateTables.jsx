import { FilePlus } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTables = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    from: "",
    to: "",
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
      let row = { n: parseInt(i), name: "No asignado" };
      availableNumbers.push(row);
    }

    handleSubmit({ name: info.name, array: availableNumbers });
  };

  const handleSubmit = async ({ name, array }) => {
    try {
      const res = await axios.post("http://localhost:8000/tables", {
        name: name,
        availableNumbers: array,
        unAvailableNumbers: [],
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

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
