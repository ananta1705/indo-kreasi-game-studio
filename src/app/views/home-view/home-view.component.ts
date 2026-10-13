import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameDataService } from '../../services/game-data.service';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';
import { MascotKipaComponent } from '../../components/mascot-kipa/mascot-kipa.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, RouterModule, MascotKipaComponent],
  template: `
    <div class="relative min-h-screen pt-24 pb-16 space-y-24 md:space-y-36">

      <!-- ============================================ -->
      <!-- SECTION 1: HERO SINEMATIK                    -->
      <!-- ============================================ -->
      <section class="relative px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
        <!-- Left Text Content -->
        <div class="lg:w-1/2 space-y-6 z-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 font-mono text-xs shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>SYS//WORLD_ENGINE: ONLINE</span>
            <span class="text-slate-500">·</span>
            <span class="text-pink-400 font-bold">AAA STUDIO</span>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight text-white">
            WE FORGE <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 drop-shadow-[0_0_35px_rgba(139,92,246,0.6)]">
              LEGENDS
            </span> <br/>
            IN NEON SHADOWS
          </h1>

          <p class="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Studio Game AAA pertama berjiwa Nusantara modern. Menghadirkan pertempuran silat cybernetic, dunia candi melayang, dan narasi mitologi dengan Unreal Engine 5.
          </p>

          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a 
              routerLink="/games" 
              (click)="audioService.playClick()"
              (mouseenter)="audioService.playHover()"
              class="px-8 py-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-white font-display text-sm font-bold tracking-widest rounded-xl uppercase shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(34,211,238,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-3"
            >
              <span>▶ MULAI PETUALANGAN</span>
            </a>

            <a 
              routerLink="/about" 
              (click)="audioService.playClick()"
              (mouseenter)="audioService.playHover()"
              class="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-200 font-display text-sm font-bold tracking-wider rounded-xl uppercase transition-all cursor-pointer flex items-center gap-2"
            >
              <span>🎮 TENTANG STUDIO</span>
            </a>
          </div>

          <!-- Key Quick Metrics -->
          <div class="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80 font-mono">
            <div>
              <div class="text-2xl font-bold text-white">4.9 ★</div>
              <div class="text-xs text-slate-400 mt-0.5">Rating Komunitas</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-cyan-400">1.2M+</div>
              <div class="text-xs text-slate-400 mt-0.5">Salinan Terjual</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-pink-400">120 FPS</div>
              <div class="text-xs text-slate-400 mt-0.5">Target Performa</div>
            </div>
          </div>
        </div>

        <!-- Right 3D Visual Artifact Component -->
        <div class="lg:w-1/2 relative w-full flex items-center justify-center">
          <div class="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            <!-- Glowing Batik Parang Outer Ring -->
            <div class="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40 animate-[spin_30s_linear_infinite]"></div>
            <div class="absolute inset-4 rounded-full border border-cyan-400/30 animate-[spin_20s_linear_infinite_reverse]"></div>
            <div class="absolute inset-12 bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>

            <!-- Central Mascot KIPA Render -->
            <div class="relative z-10 text-center scale-125 hover:scale-135 transition-transform duration-500">
              <app-mascot-kipa size="lg" expression="happy"></app-mascot-kipa>
              <div class="mt-2 font-mono text-[10px] text-cyan-400 tracking-widest bg-slate-950/80 px-3 py-1 rounded-full border border-cyan-500/40 inline-block shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                KIPA // GAME COMPANION
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 2: MARQUEE ENGINE & PLATFORM PARTNERS-->
      <!-- ============================================ -->
      <section class="border-y border-slate-800/80 bg-slate-950/60 py-6 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 mb-3 text-center">
          <span class="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            DITENAGAI OLEH TEKNOLOGI ENGINE & MITRA PLATFORM GLOBAL
          </span>
        </div>

        <div class="flex gap-12 whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
          <div *ngFor="let partner of partnerLogos" class="flex items-center gap-12 font-display text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors">
            <span>UNREAL ENGINE 5</span> ·
            <span>UNITY 6</span> ·
            <span>WWISE AUDIO</span> ·
            <span>NVIDIA RTX 4090</span> ·
            <span>PLAYSTATION 5</span> ·
            <span>XBOX SERIES X</span> ·
            <span>STEAM STORE</span> ·
            <span>EPIC GAMES</span> ·
            <span>MAYA & ZBRUSH</span> ·
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 3: GAME SHOWCASE (RARITY CARDS)      -->
      <!-- ============================================ -->
      <section class="max-w-7xl mx-auto px-6 space-y-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div>
            <div class="font-mono text-xs text-pink-400 font-bold uppercase tracking-widest mb-1">
              [ KATALOG MAHAKARYA GAME ]
            </div>
            <h2 class="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              WORLD LIBRARY & GAMEPLAY
            </h2>
          </div>

          <a 
            routerLink="/games" 
            (click)="audioService.playClick()"
            class="font-mono text-xs text-cyan-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1"
          >
            LIHAT SEMUA GAME (4) →
          </a>
        </div>

        <!-- Cards Grid with Rarity Styles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let game of gameData.games().slice(0, 3)"
            class="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            [ngClass]="{
              'rarity-legendary': game.rarity === 'Legendary',
              'rarity-epic': game.rarity === 'Epic',
              'rarity-rare': game.rarity === 'Rare'
            }"
          >
            <div>
              <!-- Rarity Header Badge -->
              <div class="flex items-center justify-between mb-4">
                <span 
                  class="font-mono text-[10px] font-extrabold uppercase px-2.5 py-1 rounded border shadow-sm"
                  [ngClass]="{
                    'bg-amber-500/20 text-amber-300 border-amber-400/50': game.rarity === 'Legendary',
                    'bg-pink-500/20 text-pink-300 border-pink-400/50': game.rarity === 'Epic',
                    'bg-cyan-500/20 text-cyan-300 border-cyan-400/50': game.rarity === 'Rare'
                  }"
                >
                  ★ {{ game.rarity }} RARITY
                </span>

                <span class="font-mono text-xs text-slate-400">
                  {{ game.status }}
                </span>
              </div>

              <!-- Game Cover Container -->
              <div class="relative aspect-video rounded-xl bg-slate-900 border border-slate-800 mb-5 overflow-hidden flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                
                <!-- Fallback Graphic Banner -->
                <div class="p-6 text-center z-20">
                  <div class="font-display font-black text-xl text-white group-hover:scale-105 transition-transform">
                    {{ game.title }}
                  </div>
                  <div class="font-mono text-xs text-cyan-400 mt-1">
                    {{ game.subtitle }}
                  </div>
                </div>

                <!-- Hover Play Trailer Overlay -->
                <button 
                  (click)="stateService.openTrailer(game); $event.stopPropagation(); audioService.playClick()"
                  class="absolute z-30 opacity-0 group-hover:opacity-100 px-4 py-2 bg-purple-600/90 text-white font-mono text-xs font-bold rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all transform scale-90 group-hover:scale-100 flex items-center gap-1.5"
                >
                  ▶ TRAILER
                </button>
              </div>

              <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {{ game.title }}: {{ game.subtitle }}
              </h3>

              <p class="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                {{ game.shortDesc }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span class="text-slate-400">{{ game.genre }}</span>
              <span class="text-amber-400 font-bold">★ {{ game.rating }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 4: BENTO GRID (CRAFTSMANSHIP)        -->
      <!-- ============================================ -->
      <section class="max-w-7xl mx-auto px-6 space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <div class="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest">
            [ METODOLOGI PERANGKAT LUNAK GAME AAA ]
          </div>
          <h2 class="font-display font-black text-3xl sm:text-4xl text-white">
            CRAFTSMANSHIP & CORE ENGINE
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-panel p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-colors space-y-4">
            <div class="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h3 class="font-display font-bold text-xl text-white">60-120 FPS STABILITY</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Arsitektur C++ multithreaded dengan kustomisasi memory pool Unreal Engine 5 untuk memastikan frame-rate stabil tanpa stuttering di semua resolusi.
            </p>
          </div>

          <div class="glass-panel p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-colors space-y-4">
            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-2xl">
              🏛️
            </div>
            <h3 class="font-display font-bold text-xl text-white">PHOTOGRAMMETRY CANDI</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Pemindaian 3D LiDAR situs purba asli Borobudur & Prambanan menghasilkan tekstur batu 8K yang orisinal dan presisi tinggi secara arkeologis.
            </p>
          </div>

          <div class="glass-panel p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-colors space-y-4">
            <div class="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-2xl">
              🎵
            </div>
            <h3 class="font-display font-bold text-xl text-white">ADAPTIVE WWISE AUDIO</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Sistem audio dinamis yang merespons aksi pertempuran dengan memadukan instrumen Slendro perunggu asli dan frekuensi synth karsa.
            </p>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 5: RPG TEAM MEMBERS                  -->
      <!-- ============================================ -->
      <section class="max-w-7xl mx-auto px-6 space-y-12">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <div class="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
            [ DEWAN PENGEMBANG STUDIO ]
          </div>
          <h2 class="font-display font-black text-3xl sm:text-4xl text-white">
            MEET THE DEVS & LOREMASTERS
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            *ngFor="let member of gameData.teamMembers()"
            class="glass-panel p-6 rounded-2xl border border-purple-500/20 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 space-y-4"
          >
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                LVL {{ member.level }} {{ member.rpgClass }}
              </span>
              <span class="font-mono text-xs text-amber-400 font-bold">LEGEND</span>
            </div>

            <div class="my-4 flex justify-center">
              <app-mascot-kipa size="md" expression="happy"></app-mascot-kipa>
            </div>

            <div>
              <h3 class="font-display font-bold text-lg text-white">
                {{ member.name }}
              </h3>
              <p class="font-mono text-xs text-cyan-400 mt-0.5">
                {{ member.role }}
              </p>
            </div>

            <!-- RPG Skill Bars -->
            <div class="space-y-2 font-mono text-[11px] pt-2 border-t border-slate-800">
              <div>
                <div class="flex justify-between text-slate-400 mb-1">
                  <span>STR (Execution)</span>
                  <span class="text-purple-400">{{ member.stats.str }}</span>
                </div>
                <div class="h-1.5 bg-slate-900 rounded overflow-hidden">
                  <div class="h-full bg-purple-500 rounded" [style.width.%]="member.stats.str"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-slate-400 mb-1">
                  <span>INT (Architecture)</span>
                  <span class="text-cyan-400">{{ member.stats.int }}</span>
                </div>
                <div class="h-1.5 bg-slate-900 rounded overflow-hidden">
                  <div class="h-full bg-cyan-400 rounded" [style.width.%]="member.stats.int"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-slate-400 mb-1">
                  <span>CRE (Lore & Art)</span>
                  <span class="text-pink-400">{{ member.stats.cre }}</span>
                </div>
                <div class="h-1.5 bg-slate-900 rounded overflow-hidden">
                  <div class="h-full bg-pink-500 rounded" [style.width.%]="member.stats.cre"></div>
                </div>
              </div>
            </div>

            <p class="text-xs italic text-slate-400 pt-2 border-t border-slate-800/80">
              "{{ member.quote }}"
            </p>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 6: QUEST LOG CONTACT TERMINAL        -->
      <!-- ============================================ -->
      <section class="max-w-4xl mx-auto px-6">
        <div class="glass-panel p-8 sm:p-12 rounded-3xl border-2 border-purple-500/30 relative overflow-hidden shadow-2xl">
          <div class="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>QUEST_LOG // TERMINAL TRANSMISSION</span>
          </div>

          <h2 class="font-display font-black text-2xl sm:text-3xl text-white mb-6">
            KIRIM TRANSMISI KEPADA KAMI
          </h2>

          <form (submit)="submitQuestLog($event)" class="space-y-6 font-mono text-xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="contact-name" class="text-slate-300 font-bold">NAMA PLAYER / AGEN *</label>
                <input 
                  id="contact-name"
                  type="text" 
                  required 
                  placeholder="e.g. Ki Dalang Arya"
                  class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div class="space-y-2">
                <label for="contact-email" class="text-slate-300 font-bold">EMAIL TRANSMISI *</label>
                <input 
                  id="contact-email"
                  type="email" 
                  required 
                  placeholder="e.g. arya@nusantaraneon.com"
                  class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label for="contact-category" class="text-slate-300 font-bold">KATEGORI PERTANYAAN / KERJASAMA *</label>
              <select id="contact-category" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">
                <option value="press">Kemitraan Studio & Press</option>
                <option value="careers">Pertanyaan Karir / Misi</option>
                <option value="community">Masukan Komunitas Player</option>
                <option value="investment">Investasi / Publishing</option>
              </select>
            </div>

            <div class="space-y-2">
              <label for="contact-message" class="text-slate-300 font-bold">ISI PESAN TRANSMISI *</label>
              <textarea 
                id="contact-message"
                rows="4" 
                required
                placeholder="Tuliskan detail pertanyaan atau proposal kerjasama Anda..."
                class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              ></textarea>
            </div>

            <button 
              type="submit"
              (mouseenter)="audioService.playHover()"
              class="w-full py-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-slate-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:scale-102 active:scale-98 transition-all shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer"
            >
              🚀 SEND TRANSMISSION & REWARD +100 XP
            </button>
          </form>
        </div>
      </section>

      <!-- Easter Egg Unlocked Banner -->
      <div class="text-center font-mono text-xs text-slate-400">
        <button 
          (click)="triggerArcade(); audioService.playQuestComplete()"
          class="hover:text-yellow-400 transition-colors cursor-pointer border-b border-dashed border-slate-700 pb-0.5"
        >
          👾 RAHASIA ARCADE: KLIK DI SINI ATAU KETIK KONAMI CODE (↑ ↑ ↓ ↓ ← → ← → B A)
        </button>
      </div>

    </div>
  `
})
export class HomeViewComponent {
  gameData = inject(GameDataService);
  stateService = inject(StateService);
  audioService = inject(AudioService);

  partnerLogos = [1, 2];

  // Konami Code Detection
  private konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  private konamiIndex = 0;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key.toLowerCase() === this.konamiSequence[this.konamiIndex].toLowerCase()) {
      this.konamiIndex++;
      if (this.konamiIndex === this.konamiSequence.length) {
        this.triggerArcade();
        this.konamiIndex = 0;
      }
    } else {
      this.konamiIndex = 0;
    }
  }

  triggerArcade() {
    this.audioService.playQuestComplete();
    this.stateService.unlockArcadeMode();
  }

  submitQuestLog(e: Event) {
    e.preventDefault();
    this.audioService.playQuestComplete();
    this.stateService.triggerQuestComplete('QUEST COMPLETE!', 100);
  }
}
