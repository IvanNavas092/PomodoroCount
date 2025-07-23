import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/app/interfaces/Mode';
import { CountService } from 'src/app/Services/count.service';
import { modesList } from 'src/app/utils/lists';

@Component({
  selector: 'app-section-count-and-breaks',
  templateUrl: './section-count-and-breaks.component.html'
})
export class SectionCountAndBreaksComponent implements OnInit {
  // presets modes
  //
  modes: Mode[] = [];
  selectedMode: Mode = modesList[0];
  isRunning: boolean = false;
  timeLeft: number = this.selectedMode.minutes * 60;
  intervalId?: ReturnType<typeof setInterval>;

  constructor(private countService: CountService) {}
  ngOnInit(): void {
    this.modes = modesList;

    // Suscripción al modo seleccionado
    const modefromStorage = localStorage.getItem('mode');
    if (modefromStorage) {
      const mode = JSON.parse(modefromStorage);
      this.countService.selectMode(mode);
    }
    this.countService.modeSelected$.subscribe(mode => {
      if (mode) {
        this.selectedMode = mode;
        // Solo actualiza el tiempo si el timer no está en marcha
        if (!this.isRunning) {
          this.timeLeft = mode.minutes * 60;
        }
      }
    });
  }

  selectMode(mode: Mode): void {
    this.stopTimer();
    this.countService.selectMode(mode);
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
    console.log(this.timeLeft);
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
