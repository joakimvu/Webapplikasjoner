import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";
import Food from "./components/Food";
import Alert from "./components/Alert";
import { useState } from "react";
const foods = ["Pizza", "Hamburger", "Coke"];
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Wrapper>
      <MyComponent />
      <Food foods={foods} />
      <Alert
        setInputValue={setInputValue}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      {isClicked === true ? <p>{inputValue}</p> : ""}
    </Wrapper>
  );
};

export default App;
