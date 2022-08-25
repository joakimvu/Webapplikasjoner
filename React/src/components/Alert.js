import { useState } from "react";
const Alert = ({ setInputValue, setIsClicked, isClicked }) => {
  // Klargjører useState hook og setter default verdi
  const [value, setValue] = useState("");

  // Funksjon som trigges når knappen blir trykket
  const handleClick = () => {
    console.log({ value });
    setInputValue(value);
    setIsClicked(!isClicked);
  };

  // Funksjon som trigges når input feltet blir oppdatert
  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <input type="text" onChange={handleInputChange} />
    </>
  );
};

export default Alert;
