import { RowID, RowElement } from "./interface";

export declare function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): RowID;
export function updateRow(rowId: RowID, row: RowElement): RowID;
