import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';
import { MascotKipaComponent } from '../mascot-kipa/mascot-kipa.component';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule, MascotKipaComponent],
  template: `
    <div 
      *ngIf="!stateService.isLoaded()" 
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05060F] transition-opacity duration-700 p-6"
    >
      <!-- Background Cyber Grid & Glow -->
      <div class="absolute inset-0 cyber-grid opacity-20"></div>
      <div class="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

      <!-- Mascot & Loading Graphic -->
      <div class="relative mb-8 text-center">
        <app-mascot-kipa size="lg" expression="happy"></app-mascot-kipa>
        <div class="mt-4 font-display text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500">
          NUSANTARA NEON
        </div>
        <div class="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
          STUDIO ENGINE v2.1.0 // INITIALIZING WORLD
        </div>
      </div>

      <!-- Progress Bar Frame -->
      <div class="w-full max-w-md bg-slate-900/90 border border-purple-500/30 rounded-lg p-2 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <div class="flex justify-between font-mono text-xs text-cyan-400 mb-1.5 px-1">
          <span>{{ statusText }}</span>
          <span class="font-bold text-pink-400">{{ progress }}%</span>
        </div>

        <div class="w-full h-3 bg-slate-950 rounded overflow-hidden p-0.5 border border-slate-800">
          <div 
            class="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 rounded transition-all duration-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            [style.width.%]="progress"
          ></div>
        </div>
      </div>

      <!-- Random Gaming Tip -->
      <div class="mt-6 font-mono text-xs text-slate-400 text-center max-w-sm px-4 py-2 rounded bg-slate-900/40 border border-slate-800">
        <span class="text-purple-400 font-bold">TIP:</span> {{ currentTip }}
      </div>

      <!-- Press Start Button when ready -->
      <div class="mt-8 h-12">
        <button 
          *ngIf="progress >= 100"
          (click)="pressStart()"
          (mouseenter)="audioService.playHover()"
          class="px-8 py-3 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-white font-display text-sm font-bold tracking-widest rounded-md uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_35px_rgba(139,92,246,0.6)] animate-bounce cursor-pointer"
        >
          ▶ PRESS START
        </button>
      </div>
    </div>
  `
})
export class LoadingScreenComponent implements OnInit {
  stateService = inject(StateService);
  audioService = inject(AudioService);

  progress = 0;
  statusText = 'LOADING ASSETS...';
  currentTip = '';

  private tips = [
    'Batik Parang memiliki irama matematika yang menginspirasi arsitektur custom shader kami.',
    'Aktifkan Performance Mode jika Anda menggunakan perangkat hemat daya.',
    'Gunakan tombol MUTE jika Anda ingin suasana lebih hening.',
    'Jelajahi Quest Board untuk bergabung menjadi pengembang game AAA di Nusantara Neon.',
    'Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) menyimpan rahasia arcade retro.'
  ];

  ngOnInit() {
    this.currentTip = this.tips[Math.floor(Math.random() * this.tips.length)];
    this.simulateLoading();
  }

  private simulateLoading() {
    const steps = [
      { p: 20, t: 'COMPILING SHADERS...' },
      { p: 45, t: 'LOADING LORE CODEX...' },
      { p: 70, t: 'SYNTHESIZING GAMELAN AUDIO...' },
      { p: 90, t: 'RENDERING KIPA MASCOT...' },
      { p: 100, t: 'WORLD READY' }
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        this.progress = steps[index].p;
        this.statusText = steps[index].t;
        index++;
      } else {
        clearInterval(interval);
      }
    }, 280);
  }

  pressStart() {
    this.audioService.playLevelUp();
    this.stateService.isLoaded.set(true);
  }
}
