import Row from "./Row";
import useRow from "../hooks/useRow";

type GameProps = {
  game: Record<string, any>;
};

// TODO: Konvertere til game-context, med useRow etc om 2 uker

// TODO: Lage Solution component for å vise løsningen / om vi klarte det og antall forsøk
export default function Game({ game }: GameProps) {
  const { state, handleCellClick } = useRow(game);

  if (!game.game.id) {
    return <p>Spill eksisterer ikke</p>;
  }

  return (
    <>
      {/* {JSON.stringify(game.game.rows)} */}
      <h1>Velkommen {game?.game?.player}</h1>
      <p>Antall mulig forsøk er {game.game.rows.length}</p>

      {game.game.rows.map((row) => (
        <Row
          key={row.number}
          row={row}
          handleSelectedColor={handleSelectedColor}
          handleRowSubmit={handleRowSubmit}
          isCurrentRow={isCurrentRow}
          handleCellClick={handleCellClick}
        />
      ))}
      {/* <Row /> */}
    </>
  );
}
