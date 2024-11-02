import React, { useState } from "react";

const SearchableList = () => {
  // Стан для збереження введеного користувачем тексту
  const [query, setQuery] = useState("");

  // Приклад списку, який будемо фільтрувати
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

  // Відфільтрований список, який відображатиметься в залежності від введеного запиту
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
