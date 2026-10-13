import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-trailer-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="stateService.activeTrailer()"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
    >
      <div class="relative w-full max-w-5xl bg-slate-950 rounded-2xl border border-purple-500/40 shadow-[0_0_50px_rgba(139,92,246,0.4)] overflow-hidden">
        <!-- Modal Header -->
        <div class="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="font-display font-bold text-sm text-white tracking-wider uppercase">
              CINEMATIC TRAILER // {{ stateService.activeTrailer()?.title }}
            </span>
          </div>
          <button 
            (click)="close()"
            (mouseenter)="audioService.playHover()"
            class="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            ✕ CLOSE
          </button>
        </div>

        <!-- Video Player Frame / Simulated Gameplay Canvas -->
        <div class="relative aspect-video bg-black flex items-center justify-center">
          <iframe 
            *ngIf="stateService.activeTrailer()?.trailerUrl"
            [src]="stateService.activeTrailer()?.trailerUrl" 
            class="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>

          <div *ngIf="!stateService.activeTrailer()?.trailerUrl" class="text-center p-8">
            <div class="text-6xl mb-4 animate-bounce">🎬</div>
            <div class="font-display text-xl text-cyan-400 font-bold mb-2">CINEMATIC TRAILER LOADED</div>
            <p class="font-mono text-xs text-slate-400">Rendering 4K HDR 60 FPS gameplay preview stream for {{ stateService.activeTrailer()?.title }}</p>
          </div>
        </div>

        <!-- Modal Footer Info -->
        <div class="p-6 bg-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-300">
          <div>
            <span class="text-purple-400 font-bold">GENRE:</span> {{ stateService.activeTrailer()?.genre }} · 
            <span class="text-pink-400 font-bold">RARITY:</span> {{ stateService.activeTrailer()?.rarity }}
          </div>
          <div class="flex items-center gap-4">
            <span class="text-emerald-400">RATING: {{ stateService.activeTrailer()?.rating }} / 5.0 ★</span>
            <a 
              [href]="'https://store.steampowered.com'" 
              target="_blank"
              class="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-display font-bold rounded hover:opacity-90 transition-opacity"
            >
              ADD TO WISHLIST
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TrailerModalComponent {
  stateService = inject(StateService);
  audioService = inject(AudioService);

  close() {
    this.audioService.playClick();
    this.stateService.closeTrailer();
  }
}
