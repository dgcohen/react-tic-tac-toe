const INITIAL_BOARD_STATE = Array(9).fill("");

function Game() {
  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">Tic Tac Toe</h1>
      <div>
        <div>{INITIAL_BOARD_STATE.map((player, index) => (
            <div>{player}</div>
          ))}
        </div>
        <div>Scores</div>
      </div>
    </div>
  );
}

export default Game;
