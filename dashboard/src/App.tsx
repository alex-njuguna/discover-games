import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nairobi", "Kampala", "Cape Town", "Marakech", "Dar es Salam"];
  let names = ["Mike", "Edith", "Bien", "Bjorn", "Peter"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>

      <ListGroup items={names} heading="Names"></ListGroup>
    </div>
  );
}

export default App;
