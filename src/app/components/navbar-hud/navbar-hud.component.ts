import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-navbar-hud',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Top XP Bar (Scroll Indicator) -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
      <div 
        class="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-150"
        [style.width.%]="scrollProgress"
      ></div>
    </div>

    <!-- Floating HUD Navbar Container -->
    <header 
      class="fixed top-4 left-0 right-0 z-40 px-4 max-w-7xl mx-auto transition-all duration-300"
      [class.top-2]="isScrolled"
    >
      <div class="glass-panel rounded-2xl px-6 py-3 flex items-center justify-between gap-8 shadow-2xl border border-purple-500/20">
        <!-- Zone 1: Brand Wordmark -->
        <a 
          routerLink="/" 
          (click)="audioService.playClick()"
          (mouseenter)="audioService.playHover()"
          class="flex items-center gap-3 shrink-0 group"
        >
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-cyan-400 to-pink-500 p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
            <div class="w-full h-full bg-[#05060F] rounded-[6px] flex items-center justify-center font-display font-black text-xs text-cyan-400">
              NN
            </div>
          </div>
          <span class="font-display font-extrabold text-base md:text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
            NUSANTARA <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">NEON</span>
          </span>
        </a>

        <!-- Zone 2: Navigation Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a 
            routerLink="/" 
            routerLinkActive="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5" 
            [routerLinkActiveOptions]="{exact: true}"
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a 
            routerLink="/games" 
            routerLinkActive="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5"
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Games
          </a>
          <a 
            routerLink="/about" 
            routerLinkActive="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5"
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Studio
          </a>
          <a 
            routerLink="/careers" 
            routerLinkActive="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5"
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Quest Board</span>
            <span class="text-[9px] bg-purple-500/30 text-purple-300 px-1.5 py-0.2 rounded font-mono border border-purple-500/40">HIRING</span>
          </a>
          <a 
            routerLink="/blog" 
            routerLinkActive="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5"
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Lore & Tech
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5"
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        <!-- Zone 3: HUD Control Cluster & Primary CTA -->
        <div class="flex items-center gap-2 md:gap-3 shrink-0">
          <!-- Sound Toggle Button -->
          <button 
            (click)="audioService.toggleMute()"
            (mouseenter)="audioService.playHover()"
            [title]="audioService.isMuted() ? 'Unmute Sound FX' : 'Mute Sound FX'"
            class="p-2 rounded-lg bg-slate-900/80 border border-slate-700/80 hover:border-purple-500 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-all cursor-pointer flex items-center gap-1"
          >
            <span>{{ audioService.isMuted() ? '🔇' : '🔊' }}</span>
            <span class="hidden sm:inline text-[10px]">{{ audioService.isMuted() ? 'MUTED' : 'SFX ON' }}</span>
          </button>

          <!-- Performance Mode Toggle -->
          <button 
            (click)="stateService.togglePerformanceMode(); audioService.playToggle()"
            (mouseenter)="audioService.playHover()"
            [title]="stateService.performanceMode() ? 'Switch to High Graphics' : 'Switch to Performance Mode'"
            class="hidden lg:flex p-2 rounded-lg bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500 text-[10px] font-mono transition-all cursor-pointer items-center gap-1"
            [ngClass]="stateService.performanceMode() ? 'text-amber-400 border-amber-500/50' : 'text-slate-300'"
          >
            <span>⚡</span>
            <span>{{ stateService.performanceMode() ? 'PERF MODE' : 'HQ GRAPHICS' }}</span>
          </button>

          <!-- Language Switcher -->
          <button 
            (click)="stateService.toggleLanguage(); audioService.playToggle()"
            (mouseenter)="audioService.playHover()"
            class="px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 hover:border-pink-500 text-xs font-mono font-bold text-slate-200 transition-all cursor-pointer"
          >
            {{ stateService.language() }}
          </button>

          <!-- Primary CTA Button -->
          <a 
            routerLink="/games" 
            (click)="audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="hidden sm:inline-flex px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-display text-xs font-bold tracking-wider rounded-lg uppercase shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            PLAY NOW
          </a>

          <!-- Mobile Drawer Toggle Button -->
          <button 
            (click)="mobileMenuOpen.set(!mobileMenuOpen()); audioService.playClick()"
            class="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 focus:outline-none"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="mobileMenuOpen() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile HUD Menu Drawer -->
      <div 
        *ngIf="mobileMenuOpen()"
        class="md:hidden mt-2 p-4 glass-panel rounded-2xl border border-purple-500/30 flex flex-col gap-3 font-display text-sm tracking-wider uppercase text-slate-200"
      >
        <a routerLink="/" (click)="mobileMenuOpen.set(false)" class="py-2 px-3 rounded hover:bg-slate-800/80">Home</a>
        <a routerLink="/games" (click)="mobileMenuOpen.set(false)" class="py-2 px-3 rounded hover:bg-slate-800/80">Games Library</a>
        <a routerLink="/about" (click)="mobileMenuOpen.set(false)" class="py-2 px-3 rounded hover:bg-slate-800/80">Studio & Lore</a>
        <a routerLink="/careers" (click)="mobileMenuOpen.set(false)" class="py-2 px-3 rounded hover:bg-slate-800/80 flex items-center justify-between">
          <span>Quest Board</span>
          <span class="text-xs bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded font-mono">HIRING</span>
        </a>
        <a routerLink="/blog" (click)="mobileMenuOpen.set(false)" class="py-2 px-3 rounded hover:bg-slate-800/80">Dev Blog & News</a>
        <a routerLink="/contact" (click)="mobileMenuOpen.set(false)" class="py-2 px-3 rounded hover:bg-slate-800/80">Contact & Terminal</a>
      </div>
    </header>
  `
})
export class NavbarHudComponent {
  stateService = inject(StateService);
  audioService = inject(AudioService);

  isScrolled = false;
  scrollProgress = 0;
  mobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress = height > 0 ? (winScroll / height) * 100 : 0;
      this.isScrolled = winScroll > 50;
    }
  }
}
