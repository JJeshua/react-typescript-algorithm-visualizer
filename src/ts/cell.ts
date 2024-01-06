export enum CellType {
  Normal,
  Wall,
  Start,
  Finish,
}

// These styles are defined in App.css
export enum CellStyles {
  Normal = "cell-normal",
  Start = "cell-start",
  Finish = "cell-finish",
}

export enum CellActions {
  UpdateCell,
  InitializeGrid,
}

export class Cell {
  posRow: number;
  posCol: number;
  cellType: CellType;
  cellStyle: CellStyles;

  constructor(
    posRow: number,
    posCol: number,
    cellType: CellType,
    cellStyle: CellStyles
  ) {
    this.posRow = posRow;
    this.posCol = posCol;
    this.cellType = cellType;
    this.cellStyle = cellStyle;
  }
}

export type CellGrid = Cell[][];