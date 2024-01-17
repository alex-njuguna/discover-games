import { useState } from "react";

function ListGroup() {
  let cities = ["Nairobi", "Kampala", "Cape Town", "Marakech", "Dar es Salam"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
