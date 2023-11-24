export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface Degree {
  id: string;
  title: string;
  field: string;
  year: number;
  details: string;
}

export interface Work {
  title: string;
  year: number;
  link: '';
}

export interface Data {
  title: string
  data: Array<Table> | []
}

export interface Table {
  label: string
  value: string
}