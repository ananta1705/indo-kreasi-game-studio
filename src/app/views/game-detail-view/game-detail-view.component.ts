import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GameDataService } from '../../services/game-data.service';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';
import { GameItem } from '../../models/game.model';

@Component({
  selector: 'app-game-detail-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="game()" class="relative min-h-screen pt-20 pb-20 space-y-16">
      
      <!-- Hero Header Banner with Dominant Game Color Glow -->
      <section class="relative min-h-[60vh] flex items-center justify-center p-6 overflow-hidden bg-slate-950 border-b border-purple-500/30">
        <div class="absolute inset-0 cyber-grid opacity-20"></div>
        <div 
          class="absolute inset-0 opacity-25 blur-3xl"
          [style.background-color]="game()?.accentColor"
        ></div>

        <div class="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 font-mono text-xs text-cyan-400">
            <span>STATUS: {{ game()?.status }}</span>
            <span>·</span>
            <span>RATING: {{ game()?.rating }} / 5.0 ★</span>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-7xl text-white tracking-tight">
            {{ game()?.title }} <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500">
              {{ game()?.subtitle }}
            </span>
          </h1>

          <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {{ game()?.fullDesc }}
          </p>

          <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button 
              (click)="stateService.openTrailer(game()!); audioService.playClick()"
              class="px-8 py-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-white font-display text-sm font-bold tracking-widest rounded-xl uppercase shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              ▶ PLAY CINEMATIC TRAILER
            </button>

            <a 
              href="https://store.steampowered.com" 
              target="_blank"
              class="px-8 py-4 bg-slate-900 border border-cyan-400/50 hover:bg-slate-800 text-cyan-300 font-display text-sm font-bold tracking-widest rounded-xl uppercase transition-all"
            >
              ADD TO STEAM WISHLIST
            </a>
          </div>
        </div>
      </section>

      <!-- Key Game Features & Platform Availability -->
      <section class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-8 space-y-8">
          <div class="space-y-4">
            <h2 class="font-display font-black text-2xl sm:text-3xl text-white">
              FITUR UTAMA GAMEPLAY
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                *ngFor="let feat of game()?.features"
                class="glass-panel p-5 rounded-xl border border-purple-500/20 space-y-2"
              >
                <div class="font-mono text-xs text-cyan-400 font-bold">KEY FEATURE</div>
                <p class="text-xs text-slate-200 leading-relaxed">{{ feat }}</p>
              </div>
            </div>
          </div>

          <!-- System Requirements HUD Tabular -->
          <div class="glass-panel p-8 rounded-2xl border border-purple-500/30 space-y-6">
            <h3 class="font-display font-bold text-xl text-white flex items-center gap-2">
              🖥️ PERSYARATAN SISTEM SPECS
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
              <!-- Minimum -->
              <div class="space-y-3 bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div class="text-pink-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2">MINIMUM SPECS</div>
                <div><span class="text-slate-500">OS:</span> {{ game()?.specs?.minimum?.os }}</div>
                <div><span class="text-slate-500">CPU:</span> {{ game()?.specs?.minimum?.cpu }}</div>
                <div><span class="text-slate-500">RAM:</span> {{ game()?.specs?.minimum?.ram }}</div>
                <div><span class="text-slate-500">GPU:</span> {{ game()?.specs?.minimum?.gpu }}</div>
                <div><span class="text-slate-500">STORAGE:</span> {{ game()?.specs?.minimum?.storage }}</div>
              </div>

              <!-- Recommended -->
              <div class="space-y-3 bg-slate-950 p-5 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <div class="text-cyan-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2">RECOMMENDED (120 FPS)</div>
                <div><span class="text-slate-500">OS:</span> {{ game()?.specs?.recommended?.os }}</div>
                <div><span class="text-slate-500">CPU:</span> {{ game()?.specs?.recommended?.cpu }}</div>
                <div><span class="text-slate-500">RAM:</span> {{ game()?.specs?.recommended?.ram }}</div>
                <div><span class="text-slate-500">GPU:</span> {{ game()?.specs?.recommended?.gpu }}</div>
                <div><span class="text-slate-500">STORAGE:</span> {{ game()?.specs?.recommended?.storage }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Specs & Stats -->
        <div class="lg:col-span-4 space-y-6">
          <div class="glass-panel p-6 rounded-2xl border border-purple-500/20 space-y-4 font-mono text-xs">
            <div class="font-display font-bold text-sm text-white uppercase tracking-widest border-b border-slate-800 pb-3">
              GAME METRICS & INFO
            </div>

            <div class="flex justify-between py-1 border-b border-slate-900">
              <span class="text-slate-400">Release Target:</span>
              <span class="text-white font-bold">{{ game()?.releaseDate }}</span>
            </div>

            <div class="flex justify-between py-1 border-b border-slate-900">
              <span class="text-slate-400">Rarity Tier:</span>
              <span class="text-amber-400 font-bold">{{ game()?.rarity }}</span>
            </div>

            <div class="flex justify-between py-1 border-b border-slate-900">
              <span class="text-slate-400">Genre:</span>
              <span class="text-cyan-400 font-bold">{{ game()?.genre }}</span>
            </div>

            <div class="pt-2">
              <span class="text-slate-400 block mb-2">Available Platforms:</span>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  *ngFor="let plat of game()?.platforms"
                  class="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-[10px] text-slate-200"
                >
                  {{ plat }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class GameDetailViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private gameData = inject(GameDataService);
  stateService = inject(StateService);
  audioService = inject(AudioService);

  game = signal<GameItem | undefined>(undefined);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const found = this.gameData.games().find(g => g.id === id);
      this.game.set(found || this.gameData.games()[0]);
    });
  }
}
