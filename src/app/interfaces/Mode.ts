export interface Mode {
  label: string;
  value: string;
  minutes: number;
  nextMode: 'short-break' | 'long-break' | 'pomodoro';
}
