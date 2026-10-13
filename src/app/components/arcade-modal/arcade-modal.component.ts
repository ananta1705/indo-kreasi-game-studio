import { Component, ElementRef, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-arcade-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="stateService.isArcadeUnlocked()"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in"
    >
      <div class="relative w-full max-w-3xl bg-slate-950 rounded-2xl border-2 border-yellow-400 shadow-[0_0_60px_rgba(251,191,36,0.4)] overflow-hidden flex flex-col">
        <!-- Arcade Header -->
        <div class="flex items-center justify-between px-6 py-3 bg-yellow-400/10 border-b border-yellow-400/40">
          <div class="flex items-center gap-3">
            <span class="font-display font-black text-sm text-yellow-400 tracking-widest uppercase">
              🎮 ARCADE MODE UNLOCKED // KIPA RETRO DEFENDER
            </span>
          </div>
          <button 
            (click)="close()"
            (mouseenter)="audioService.playHover()"
            class="px-3 py-1 bg-yellow-400/20 text-yellow-300 font-mono text-xs rounded hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
          >
            EXIT ARCADE
          </button>
        </div>

        <!-- Arcade Canvas & HUD -->
        <div class="relative w-full h-[400px] bg-black scanline-effect flex items-center justify-center">
          <canvas #gameCanvas class="w-full h-full block"></canvas>

          <!-- On-screen controls overlay for mobile -->
          <div class="absolute bottom-4 left-4 right-4 flex justify-between md:hidden pointer-events-auto">
            <button (click)="moveLeft()" class="px-6 py-3 bg-slate-800 text-white rounded font-mono text-xs">◀ LEFT</button>
            <button (click)="shoot()" class="px-8 py-3 bg-yellow-400 text-black font-bold rounded font-mono text-xs">FIRE 🔥</button>
            <button (click)="moveRight()" class="px-6 py-3 bg-slate-800 text-white rounded font-mono text-xs">RIGHT ▶</button>
          </div>
        </div>

        <!-- Arcade Footer Stats -->
        <div class="p-4 bg-slate-900 flex items-center justify-between font-mono text-xs text-yellow-400 border-t border-slate-800">
          <div>SCORE: <span class="text-white font-bold text-sm">{{ score }}</span></div>
          <div>HIGH SCORE: <span class="text-white font-bold text-sm">{{ highScore }}</span></div>
          <div class="hidden sm:block text-slate-400 text-[10px]">CONTROLS: ARROW KEYS / SPACEBAR</div>
        </div>
      </div>
    </div>
  `
})
export class ArcadeModalComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  stateService = inject(StateService);
  audioService = inject(AudioService);

  score = 0;
  highScore = 1250;
  private animId: number | null = null;
  private playerX = 200;
  private bullets: { x: number; y: number }[] = [];
  private enemies: { x: number; y: number; speed: number }[] = [];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKey);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleKey);
      if (this.animId) cancelAnimationFrame(this.animId);
    }
  }

  close() {
    this.audioService.playClick();
    this.stateService.isArcadeUnlocked.set(false);
  }

  moveLeft() { this.playerX = Math.max(20, this.playerX - 20); }
  moveRight() { this.playerX = Math.min(500, this.playerX + 20); }
  shoot() {
    this.bullets.push({ x: this.playerX + 15, y: 350 });
    this.audioService.playClick();
  }

  private handleKey = (e: KeyboardEvent) => {
    if (!this.stateService.isArcadeUnlocked()) return;
    if (e.key === 'ArrowLeft') this.moveLeft();
    if (e.key === 'ArrowRight') this.moveRight();
    if (e.key === ' ' || e.key === 'ArrowUp') this.shoot();
  };
}
