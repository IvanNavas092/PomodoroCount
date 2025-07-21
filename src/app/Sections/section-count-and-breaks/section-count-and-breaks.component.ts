import { Component,  } from '@angular/core';
import { Mode } from 'src/app/interfaces/Mode';
import { ModalBackgroundService } from 'src/app/Services/modal-background.service';

@Component({
  selector: 'app-section-count-and-breaks',
  templateUrl: './section-count-and-breaks.component.html',
})
export class SectionCountAndBreaksComponent {
  
  modes: Mode[] = [
    { label: 'Pomodoro', value: 'pomodoro', minutes: 25 },
    { label: 'Short break', value: 'short break', minutes: 5 },
    { label: 'Long break', value: 'long break', minutes: 15 }
  ];

  selectedMode: Mode = this.modes[0];
  isRunning: boolean = false;
  timeLeft: number = this.selectedMode.minutes * 60;
  intervalId?: ReturnType<typeof setInterval>;

  selectMode(mode: Mode): void {
    this.stopTimer();
    this.modes.forEach(m => m.value = mode.value);
    mode.value = this.selectedMode.value;
    this.selectedMode = mode;
    this.timeLeft = mode.minutes * 60;
    this.isRunning = false;
    this.clearInterval();
  }

  startTimer(): void {
    if (this.isRunning) return; // evitar múltiples intervalos

    this.isRunning = true;
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
        // Aquí puedes añadir una acción cuando el timer termina, como sonido o notificación
      }
    }, 1000);
  }

  stopTimer(): void {
    this.isRunning = false;
    this.clearInterval();
  }

  pauseTimer(): void {
    this.stopTimer();
  }

  resetTimer(): void {
    this.stopTimer();
    this.timeLeft = this.selectedMode.minutes * 60;
  }

  private clearInterval(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  getDisplayTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

}
