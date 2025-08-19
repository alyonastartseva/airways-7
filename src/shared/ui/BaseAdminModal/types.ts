export type FieldType = 'input' | 'select' | 'date' | 'checkbox';

export interface AdminModalField {
  title: string;
  name: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
}
