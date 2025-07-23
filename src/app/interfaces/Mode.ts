export interface Mode {
  label: string;
  value: string;
  minutes: number;
}

export interface modeBox {
  label: string;
  modes: Mode[];
  image: string;
}
