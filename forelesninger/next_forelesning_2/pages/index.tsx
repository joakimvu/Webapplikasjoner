import type { NextPage } from "next";
import Game from "../components/Game";
import Start from "../components/Start";
import { useState } from "react";

// const steps = [
//   { name: "Spill", component: <Start /> },
//   { name: "Game", component: <Game /> },
// ];

export const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "pink",
  "cyan",
  "gray",
];

const initialState = {
  game: {
    id: "",
    user: "",
    combination: [],
    rows: [
      {
        number: 0,
        name: "row-0",
        cells: [
          { name: "cell-0", background: "transparent" },
          { name: "cell-1", background: "transparent" },
          { name: "cell-2", background: "transparent" },
          { name: "cell-3", background: "transparent" },
        ],
      },
      {
        number: 1,
        name: "row-1",
        cells: [
          { name: "cell-0", background: "transparent" },
          { name: "cell-1", background: "transparent" },
          { name: "cell-2", background: "transparent" },
          { name: "cell-3", background: "transparent" },
        ],
      },
      {
        number: 2,
        name: "row-2",
        cells: [
          { name: "cell-0", background: "transparent" },
          { name: "cell-1", background: "transparent" },
          { name: "cell-2", background: "transparent" },
          { name: "cell-3", background: "transparent" },
        ],
      },
      {
        number: 3,
        name: "row-3",
        cells: [
          { name: "cell-0", background: "transparent" },
          { name: "cell-1", background: "transparent" },
          { name: "cell-2", background: "transparent" },
          { name: "cell-3", background: "transparent" },
        ],
      },
    ],
  },
  currentColor: null,
  currentRow: 0,
  hints: [],
  rawHints: [],
  colors,
  selectedColors: [],
  remaningColors: colors,
  foundCombination: false,
  isComplete: false,
};

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const [game, setGame] = useState<any>(initialState);

  const handleSubmit = ({ player, rows }) => {
    console.log(player, rows);
    setGame((prev) => ({
      ...prev,
      game: {
        ...prev.game,
        id: "1",
        user: player,
        combination: ["red", "blue", "orange", "cyan"],
      },
    }));
    setStep(1);
  };

  return (
    <main>
      {/* {JSON.stringify(game.game)} */}
      {/* <p>Spiller: {player}</p>
      <p>Antall forsøk: {rows}</p> */}
      {step === 0 ? (
        <>
          {/* Sende handleSubmit og nødvendige props */}
          <Start handleSubmit={handleSubmit} />
        </>
      ) : (
        <>
          {/* Erstatte med "game" prop (for å unngå for mange props) */}
          {/* <Game player={""} rows={0} /> */}
          <Game game={game} />
        </>
      )}
    </main>
  );
};

export default Home;
