import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/app/interfaces/Mode';
import { CountService } from 'src/app/Services/count.service';

@Component({
  selector: 'app-section-count-and-breaks',
  templateUrl: './section-count-and-breaks.component.html'
})
export class SectionCountAndBreaksComponent implements OnInit {
  // presets modes
  //
  modes: Mode[] = [];
  selectedMode: Mode = this.countService.getModes()[0];
  isRunning: boolean = false;
  timeLeft: number = this.selectedMode.minutes * 60;
  intervalId?: ReturnType<typeof setInterval>;
  pomodoroCount: number = 0;
  constructor(private countService: CountService) {}
  ngOnInit(): void {
    this.modes = this.countService.getModes();
    // Suscripción al modo seleccionado

    // Inicializar con el modo actual
    this.countService.modeSelected$.subscribe(mode => {
      this.selectedMode = mode;
      this.timeLeft = mode.minutes * 60;
    });

    // Cargar contador de pomodoros desde localStorage
    const savedCount = localStorage.getItem('pomodoro-count');
    this.pomodoroCount = savedCount ? parseInt(savedCount) : 0;
  }

  selectMode(mode: Mode): void {
    this.stopTimer();
    this.countService.selectMode(mode);
    this.isRunning = false;
    this.clearInterval();
    this.timeLeft = mode.minutes * 60;
  }

  startTimer(): void {
    if (this.isRunning) return; // evitar múltiples intervalos

    this.isRunning = true;
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
        this.switchNextMode();
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

  switchNextMode(): void {
    if (this.selectedMode.value === 'pomodoro') {
      this.pomodoroCount++;
      console.log('Pomodoro completado. Total:', this.pomodoroCount);
    }

    let nextModeValue = this.selectedMode.nextMode;

    if (nextModeValue === 'short-break' && this.pomodoroCount % 4 === 0) {
      nextModeValue = 'long-break';
      console.log('Cambio a long break');
    } else {
      console.log('Cambio a modo:', nextModeValue);
    }

    const nextMode = this.countService.getModes().find(m => m.value === nextModeValue);

    if (nextMode) {
      this.selectMode(nextMode);
      this.countService.selectMode(nextMode);
      setTimeout(() => this.startTimer(), 100);
    } else {
      console.error('No se encontró el modo:', nextModeValue, this.countService.getModes());
    }
  }
}
