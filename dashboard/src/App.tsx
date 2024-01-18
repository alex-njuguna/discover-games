import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nairobi", "Kampala", "Cape Town", "Marakech", "Dar es Salam"];
  let names = ["Mike", "Edith", "Bien", "Bjorn", "Peter"];

  function handleSelectItem(item: string) {
    console.log(item);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      <ListGroup
        items={names}
        heading="Names"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
