import { useState } from "react";
import { ScrollText, X, XCircle } from "lucide-react";
import axios from "axios";

const Table = ({ name, availableNumbers, unAvailableNumbers, id, reFetch }) => {
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
  return (
    <div className="table">
      <div className="table--top">
        <h1>{name}</h1>

        <div className="people--list--btn">
          <ScrollText />
          Lista de personas
        </div>
      </div>

      <div className="edit--options"></div>
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
