export const rightShift = (arr, n) => {
  const result = [];
  if (n > arr.length) {
    n = n % arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i + n > arr.length - 1) {
      result[n - (arr.length - i)] = arr[i];
    } else {
      result[i + n] = arr[i];
    }
  }
  return result;
}
export const findEmpty = (selected, board) => {
  return selected
    .reduce((emptyCells, tile) => {
      const t = tile.id - 20;
      const r = tile.id + 1;
      const b = tile.id + 20;
      const l = tile.id - 1;
      return [...emptyCells, board[t], board[r], board[b], board[l]];
    }, [])
    .filter(x => x !== undefined && x.value !== 1);
};
export const valid = (cell, currentTile) => {
  const output = [];
  for (let i = 0; i < 4; i++) {
    const currentShifted = rightShift(currentTile.borders, i);
    const currentBorders = currentShifted.map((b, id) =>
      cell.borders[id] === 0 ? 0 : b
    );
    if (currentBorders.join("") === cell.borders.join("")) {
      output.push(currentBorders);
    }
  }
  if (output.length) {
    return true;
  } else {
    return false;
  }
};
export const checkRotation = (cellBorders, currBorders) => {
  for (let i = 0; i < 4; i++) {
    const currentShifted = rightShift(currBorders, i);
    const currentBorders = currentShifted.map((b, id) =>
      cellBorders[id] === 0 ? 0 : b
    );
    if (currentBorders.join("") === cellBorders.join("")) {
      return i;
    }
  }
}
export const getNewTile = tiles => {
  const random = Math.floor(Math.random() * tiles.length);
  const newTile = tiles[random];
  return newTile;
};