import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) {
  return (
    <button className = "square"
            onClick = {() => props.onClick()} >
      {props.value}
    </button> );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.nextTurnX = true;
    this.arrLen = 1;
    this.history = [ {squares : Array(9).fill(null),}];
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log(this.nextTurnX);
    if(calculateWinner(this.state.squares) || squares[i])
      return;
    if (this.nextTurnX){
      squares[i] = 'X';
    }
    else {
      squares[i] = 'O';
    }
    this.nextTurnX = ! this.nextTurnX;
    this.setState({squares: squares});
    this.history = this.history.concat([squares]);
    this.arrLen += 1;
  
    console.log(this.arrLen);
    console.log(this.history[this.arrLen-1]);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    //const status = 'Next player: X';
    let status = 'Next player: ' + (this.nextTurnX ? 'X' : 'O');
    const winner = calculateWinner(this.state.squares);
    if( winner === 'X') 
      status = 'Winner is X';
    else if (winner=== 'O')
      status = 'Winner is O';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
        <div className="prevButton">
          <button onClick = { () => this.showPrev()} > PREV  </button>
        </div>
        <div className="dropdown" >
          <select id="operator">
            <option value="Fenics-NY4">Fenics-NY4</option>
            <option value="Fenics-LD4">Fenics-LD4</option>
            <option value="Cantor-Algo-NY4">Cantor-Algo-NY4</option>
          </select>
        </div>
        <div className="submit">
          <button onClick = { () => this.submit()} > Submit  </button>
        </div>
      </div>
    );
  }
  submit() {
    var obj = document.getElementById("operator");
    console.log(obj.options[obj.selectedIndex].text);
  }
  showPrev() {  
    if(this.arrLen >1) {
      this.arrLen -= 1 ;
      this.setState({squares: this.history[this.arrLen-1]});
      this.nextTurnX = ! this.nextTurnX;
    }
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
