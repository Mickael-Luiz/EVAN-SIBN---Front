export interface ITableInfo {
  column: string;
  field: string;
  buttons?: IActionColumn[];
  align?: string;
  icon?: boolean;
  width?: string;
}

interface IActionColumn {
  icon: string;
  color: string;
  backgroundColor: string;
}
