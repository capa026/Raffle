import { XCircle } from "lucide-react";

const PeopleList = ({ availableNumbers, setOpenList }) => {
  let obj = {};
  let people = [];

  availableNumbers.forEach((itm) => {
    let currentName = itm.name.trimEnd();
    if (!Object.hasOwn(obj, currentName)) {
      obj[currentName] = [];
    }

    obj[currentName].push(itm.n);
  });
  for (const person in obj) {
    people.push({ name: person, numbers: obj[person] });
  }

  people.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="people--list">
      <div className="close--list">
        <XCircle color="white" onClick={() => setOpenList(false)} size={25} />
      </div>
      <div className="list">
        <h1>Lista de personas y sus numeros</h1>
        {
          people.map(
            (item, i) =>
              item.name !== "No asignado" && (
                <div className="person" key={i}>
                  <div className="name">{item.name}</div>
                  <div className="number">
                    {item.numbers.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                </div>
              )
          )
          /* 
        availableNumbers.map(
          (item, i) =>
            item.name !== "No asignado" && (
            )
            )*/
        }
      </div>
    </div>
  );
};
export default PeopleList;
