import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <h3>My Alert</h3>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        MyButton
      </Button>
    </>
  );
}

export default App;
