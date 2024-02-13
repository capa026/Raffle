import { useState } from "react";
import { NotebookTabs, Receipt, ScrollText, X, XCircle } from "lucide-react";
import axios from "axios";
import PeopleList from "./PeopleList";

const Table = ({ name, availableNumbers, unAvailableNumbers, id, reFetch }) => {
  const [openList, setOpenList] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [edit, setEdit] = useState({ index: null });

  const handleEdit = (index, name) => {
    if (openEdit) return;
    setOpenEdit(true);
    setEdit({ index });
  };
  const closeEdit = () => {
    setOpenEdit(false);
    setNewName("");
  };
  const handleSubmit = async (e) => {
    if (newName.trim() === "") return;

    try {
      await axios.put("https://express-server-jp32.onrender.com/tables/" + id, {
        index: edit.index,
        name: newName,
      });
      setOpenEdit(false);
      reFetch("tables");
    } catch (error) {
      throw error;
    }
  };

  const arr = [];
  availableNumbers.forEach((obj) => {
    const { n, name } = obj;
  });
  return (
    <div className="table">
      <div className="table--top">
        <div
          className="people--list--btn"
          onClick={() => setOpenList(!openList)}
        >
          <ScrollText />
          Lista de personas
        </div>
        <h1>
          <NotebookTabs size={30} color="#97213a" />
          {name}
        </h1>
        <h1>
          <Receipt size={30} color="green" />
          Vendidos: {unAvailableNumbers.length}
        </h1>
      </div>

      <div className="division" />

      {openList && (
        <PeopleList
          availableNumbers={availableNumbers}
          setOpenList={setOpenList}
        />
      )}

      {openEdit && (
        <div className="edit--square">
          <div className="edit--title">
            <div className="title">Editando #{edit.index + 1}</div>
            <span className="edit--close">
              <XCircle color="#97213a" onClick={closeEdit} />
            </span>
          </div>
          <div className="edit--form">
            <input
              type="text"
              placeholder="Nombre de la persona"
              onChange={(e) => setNewName(e.target.value)}
            />
            <button className="edit--save" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </div>
      )}

      <div className="table-content">
        {availableNumbers?.map((item, i) => (
          <div
            className="square"
            key={i}
            onClick={() => handleEdit(item.n - 1, item._id)}
          >
            <h1>{item.n}</h1>
            <div className="tooltip">{item.name}</div>
            {unAvailableNumbers.includes(item.n - 1) && (
              <div className="taken">
                <X color="red" size={50} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Table;
