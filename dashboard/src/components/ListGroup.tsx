function ListGroup() {
  const cities = [
    "Nairobi",
    "Kampala",
    "Cape Town",
    "Marakech",
    "Dar es Salam",
  ];

  return (
    <>
      <h1>Cities</h1>
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
