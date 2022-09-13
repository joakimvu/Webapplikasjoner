import { useState } from "react";

import axios from "axios";

import { validate } from "../lib/validate/index.js";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setData(null);

    const isValidNickname = validate.minLength(3, nickname);
    const isValidEmail = validate.isEmail(email);

    // bør lage en custom hook
    // eller bruke et bibliotek (Formik, React Hook Form e.l)
    // til å validere
    if (!isValidNickname && !isValidEmail) {
      setValidationErrors({
        nickname: "Nickname må være 3 bokstaver eller mer",
        email: "Ikke gyldig e-post",
      });
    } else if (!isValidNickname) {
      setValidationErrors({
        nickname: "Nickname må være 3 bokstaver eller mer",
      });
    } else if (!isValidEmail) {
      setValidationErrors({
        email: "Ikke gyldig e-post",
      });
    } else {
      setValidationErrors(null);
      // bør her bruke custom hook (gjennomgått)
      // eller bibliotek (React Query, Redux RTK, SWR) til å sende forespørselen
      try {
        // sender data til http://localhost:3000/api/users
        // trigger kontrolleren i /features/users/users.controller.js
        // bruker metoden "createUser" i controlleren
        const response = await axios.post("/api/users", { email, nickname });

        if (response?.data?.success) {
          setError(null);
          setData(response?.data?.data);
        }
      } catch (err) {
        setError(err?.response?.data?.error);
      }
    }
  };

  return (
    <>
      {data ? JSON.stringify(data) : null}
      <form onSubmit={onSubmit}>
        <div>
          {error ? <span>{error}</span> : null}
          {validationErrors ? JSON.stringify(validationErrors) : null}
        </div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="text"
          value={nickname}
          minLength="1"
          onChange={handleNicknameChange}
          required
        />
        <button type="submit">Lag bruker</button>
      </form>
    </>
  );
};

export default CreateUser;
