import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { MascotKipaComponent } from '../../components/mascot-kipa/mascot-kipa.component';

@Component({
  selector: 'app-not-found-view',
  standalone: true,
  imports: [CommonModule, RouterModule, MascotKipaComponent],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#05060F] relative overflow-hidden">
      <div class="absolute inset-0 cyber-grid opacity-20"></div>

      <div class="relative z-10 space-y-6 max-w-md">
        <app-mascot-kipa size="lg" expression="gameover"></app-mascot-kipa>

        <div class="font-display font-black text-5xl text-red-500 tracking-widest animate-pulse">
          GAME OVER
        </div>

        <div class="font-mono text-sm text-slate-300">
          SYSTEM ERROR 404: AREA VOID TIDAK DITEMUKAN
        </div>

        <div class="p-4 bg-slate-900 border border-red-500/40 rounded-xl font-mono text-2xl font-bold text-yellow-400">
          CONTINUE? <span class="text-white">{{ countdown() }}</span>
        </div>

        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            routerLink="/" 
            (click)="audioService.playClick()"
            class="w-full py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer"
          >
            ▶ INSERT COIN & RESTART
          </a>
        </div>
      </div>
    </div>
  `
})
export class NotFoundViewComponent implements OnInit, OnDestroy {
  audioService = inject(AudioService);
  countdown = signal<number>(10);
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.countdown() > 0) {
        this.countdown.set(this.countdown() - 1);
      } else {
        this.countdown.set(10);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
