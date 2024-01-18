import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("hello world");
  };

  return (
    <>
      <Button color="danger" onClick={handleClick}>
        MyButton
      </Button>
    </>
  );
}

export default App;
