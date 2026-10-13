import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameDataService } from '../../services/game-data.service';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-games-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="relative min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-12">
      <!-- Header Banner -->
      <div class="space-y-4">
        <div class="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2">
          <span>WORLD_LIBRARY // 04 TITLES FOUND</span>
        </div>
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
          KATALOG GAME STUDI
        </h1>
        <p class="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Jelajahi seluruh karya game buatan Nusantara Neon Studio. Filter berdasarkan status rilis, genre, dan platform target.
        </p>
      </div>

      <!-- Search & Filter Controls Bar -->
      <div class="glass-panel p-4 rounded-2xl border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        <!-- Interactive Filter Segmented Buttons -->
        <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button 
            *ngFor="let filter of filterOptions"
            (click)="setFilter(filter.id)"
            (mouseenter)="audioService.playHover()"
            class="px-4 py-2 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap"
            [ngClass]="activeFilter() === filter.id 
              ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
              : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Search Input Bar -->
        <div class="relative w-full md:w-72">
          <input 
            type="text" 
            [value]="searchQuery()"
            (input)="onSearchInput($event)"
            placeholder="Search game or genre..." 
            class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <span class="absolute right-3 top-2.5 text-slate-500">🔍</span>
        </div>
      </div>

      <!-- Games Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          *ngFor="let game of filteredGames()"
          class="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
          [ngClass]="{
            'rarity-legendary': game.rarity === 'Legendary',
            'rarity-epic': game.rarity === 'Epic',
            'rarity-rare': game.rarity === 'Rare'
          }"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span 
                class="font-mono text-[10px] font-extrabold uppercase px-2.5 py-1 rounded border"
                [ngClass]="{
                  'bg-amber-500/20 text-amber-300 border-amber-400/50': game.rarity === 'Legendary',
                  'bg-pink-500/20 text-pink-300 border-pink-400/50': game.rarity === 'Epic',
                  'bg-cyan-500/20 text-cyan-300 border-cyan-400/50': game.rarity === 'Rare'
                }"
              >
                ★ {{ game.rarity }}
              </span>

              <span class="font-mono text-xs text-cyan-400 font-bold">
                {{ game.status }}
              </span>
            </div>

            <div class="relative aspect-video rounded-xl bg-slate-900 border border-slate-800 mb-5 overflow-hidden flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
              <div class="p-6 text-center z-10">
                <div class="font-display font-black text-2xl text-white">
                  {{ game.title }}
                </div>
                <div class="font-mono text-xs text-cyan-400 mt-1">
                  {{ game.subtitle }}
                </div>
              </div>

              <button 
                (click)="stateService.openTrailer(game); audioService.playClick()"
                class="absolute z-20 opacity-0 group-hover:opacity-100 px-4 py-2 bg-purple-600/90 text-white font-mono text-xs font-bold rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all transform scale-90 group-hover:scale-100"
              >
                ▶ WATCH TRAILER
              </button>
            </div>

            <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {{ game.title }}: {{ game.subtitle }}
            </h3>

            <p class="text-xs text-slate-300 leading-relaxed mb-6">
              {{ game.shortDesc }}
            </p>

            <div class="space-y-2 mb-6 font-mono text-[11px] text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <div *ngFor="let feat of game.features.slice(0, 2)" class="flex items-start gap-1.5">
                <span class="text-cyan-400">▹</span>
                <span>{{ feat }}</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
            <a 
              [routerLink]="['/games', game.id]"
              (click)="audioService.playClick()"
              class="w-full py-2.5 bg-slate-900 hover:bg-purple-600 hover:text-white border border-slate-700 hover:border-purple-500 rounded-lg text-center font-display font-bold text-xs uppercase tracking-wider text-slate-200 transition-all"
            >
              EXPLORE GAME DETAILS →
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GamesViewComponent {
  gameData = inject(GameDataService);
  stateService = inject(StateService);
  audioService = inject(AudioService);

  activeFilter = signal<string>('all');
  searchQuery = signal<string>('');

  filterOptions = [
    { id: 'all', label: 'Semua Game' },
    { id: 'Released', label: 'Rilis' },
    { id: 'In Development', label: 'Pengembangan' },
    { id: 'Beta', label: 'Closed Beta' }
  ];

  filteredGames = computed(() => {
    let list = this.gameData.games();
    const filter = this.activeFilter();
    const query = this.searchQuery().toLowerCase().trim();

    if (filter !== 'all') {
      list = list.filter(g => g.status === filter);
    }

    if (query) {
      list = list.filter(g => 
        g.title.toLowerCase().includes(query) || 
        g.subtitle.toLowerCase().includes(query) ||
        g.genre.toLowerCase().includes(query)
      );
    }

    return list;
  });

  setFilter(id: string) {
    this.audioService.playClick();
    this.activeFilter.set(id);
  }

  onSearchInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }
}
