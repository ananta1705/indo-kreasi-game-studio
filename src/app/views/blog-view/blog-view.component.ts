import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../../services/game-data.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-12">
      
      <!-- Header -->
      <div class="space-y-4">
        <div class="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
          <span>LORE_CODEX // ENGINEERING & DESIGN CHRONICLES</span>
        </div>
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
          DEV BLOG & LORE HUB
        </h1>
        <p class="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Catatan teknis, riset budaya, dan proses di balik layar pembuatan game AAA di Nusantara Neon.
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div 
          *ngFor="let article of gameData.blogArticles()"
          class="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between font-mono text-xs text-slate-400">
              <span class="text-pink-400 font-bold">{{ article.category }}</span>
              <span>{{ article.readTime }}</span>
            </div>

            <h3 class="font-display font-bold text-2xl text-white">
              {{ article.title }}
            </h3>

            <p class="text-xs text-slate-300 leading-relaxed">
              {{ article.summary }}
            </p>

            <!-- Code Snippet Box -->
            <div *ngIf="article.codeSnippet" class="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto">
              <pre>{{ article.codeSnippet }}</pre>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-800 font-mono text-xs flex items-center justify-between text-slate-400">
            <span>BY {{ article.author }}</span>
            <span>{{ article.date }}</span>
          </div>
        </div>
      </div>

    </div>
  `
})
export class BlogViewComponent {
  gameData = inject(GameDataService);
  audioService = inject(AudioService);
}
