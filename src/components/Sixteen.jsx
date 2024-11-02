import React, { useState } from "react";

const Sixteen = () => {
  const [listTwo, setListTwo] = useState("");
  const [addTwo, setAddTwo] = useState([]);

  const handelInputAddTwo = (e) => {
    setListTwo(e.target.value);
  };

  const handelChangeList = () => {
    if (listTwo !== "") {
      setAddTwo([...addTwo, listTwo]);
      setListTwo("");
    }
  };

  const sortListByAlfavit = () => {
    setAddTwo([...addTwo].sort());
  };

  return (
    <div>
      <input
        type="text"
        value={listTwo}
        placeholder="Введіть новий елемент списку"
        onChange={handelInputAddTwo}
      />
      <button type="submit" onClick={handelChangeList}>
        {""}
        Додати новий елемент
      </button>
      <input type="checkbox" name="Checkbox" onClick={sortListByAlfavit} />
      <ul>
        {addTwo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sixteen;
