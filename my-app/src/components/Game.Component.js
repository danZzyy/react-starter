import React from 'react';
import Board from './Board.Component';

class Game extends React.Component {
    render() {
      return (
        <div className="game">
            <h3>Game</h3>
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div></div>
            <ol></ol>
          </div>
        </div>
      );
    }
  }

  export default Game;