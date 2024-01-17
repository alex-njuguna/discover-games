function ListGroup() {
  let cities = ["Nairobi", "Kampala", "Cape Town", "Marakech", "Dar es Salam"];
  cities = [];
  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
