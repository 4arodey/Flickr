export interface IFieldBase {
  id: number;
  title: string;
  required: boolean;
  value: any;
  readonly: boolean;
  type: FieldType;
}

export enum FieldType {
  CHECKBOX,
  TEXT,
  RADIO,
  SELECT
}
