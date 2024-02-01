import { FilePlus } from "lucide-react";

const CreateTables = () => {
  return (
    <div className="create--tables">
      <div className="container">
        <div className="form">
          <input type="text" placeholder="Nombre de la rifa" />
          <div className="wrapper">
            <input type="number" placeholder="Inicio" />
            <span>Al</span>
            <input type="number" placeholder="Fin" />
          </div>
          <button>
            <FilePlus />
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateTables;
