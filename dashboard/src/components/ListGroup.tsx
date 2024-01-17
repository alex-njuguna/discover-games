import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["Nairobi", "Kampala", "Cape Town", "Marakech", "Dar es Salam"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item" onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
