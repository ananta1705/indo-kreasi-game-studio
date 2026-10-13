import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-footer-hud',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="relative bg-[#05060F] text-slate-400 pt-20 pb-12 border-t border-purple-500/20 overflow-hidden">
      <!-- Neon Horizon Line Glow -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
      
      <!-- Watermark Background Logo -->
      <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-black text-7xl md:text-[140px] text-purple-900/10 pointer-events-none select-none whitespace-nowrap tracking-widest">
        NUSANTARA NEON
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <!-- Col 1: Studio Info & Power-Up -->
          <div class="md:col-span-5 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded bg-gradient-to-tr from-purple-600 via-cyan-400 to-pink-500 p-0.5">
                <div class="w-full h-full bg-[#05060F] rounded flex items-center justify-center font-display font-black text-xs text-cyan-400">
                  NN
                </div>
              </div>
              <span class="font-display font-black text-xl text-white tracking-wider">
                NUSANTARA <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">NEON</span>
              </span>
            </div>

            <p class="text-sm text-slate-400 leading-relaxed max-w-md">
              Studio game AAA pertama berjiwa Nusantara modern. Menghadirkan petualangan sinematik kelas dunia dengan teknologi Next-Gen Unreal Engine 5 dan orkestrasi audio gamelan electro.
            </p>

            <div class="pt-2 font-mono text-xs text-cyan-400 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>STUDIO HQ: Jakarta · Bali · World</span>
            </div>
          </div>

          <!-- Col 2: Games Library -->
          <div class="md:col-span-3 space-y-3">
            <div class="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Featured Worlds
            </div>
            <ul class="space-y-2 text-xs font-mono">
              <li><a routerLink="/games" class="hover:text-cyan-400 transition-colors">WAYANG 2099: Shadow Protocol</a></li>
              <li><a routerLink="/games" class="hover:text-cyan-400 transition-colors">BOROBUDUR: Relics of Eternity</a></li>
              <li><a routerLink="/games" class="hover:text-cyan-400 transition-colors">DAYAK: Guardians of Borneo</a></li>
              <li><a routerLink="/games" class="hover:text-cyan-400 transition-colors">NUSANTARA: Kingdom of Sky</a></li>
            </ul>
          </div>

          <!-- Col 3: Studio & Careers -->
          <div class="md:col-span-2 space-y-3">
            <div class="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Navigation
            </div>
            <ul class="space-y-2 text-xs font-mono">
              <li><a routerLink="/about" class="hover:text-cyan-400 transition-colors">About Studio</a></li>
              <li><a routerLink="/careers" class="hover:text-cyan-400 transition-colors">Quest Board (Careers)</a></li>
              <li><a routerLink="/blog" class="hover:text-cyan-400 transition-colors">Lore & Tech Blog</a></li>
              <li><a routerLink="/contact" class="hover:text-cyan-400 transition-colors">Contact Terminal</a></li>
            </ul>
          </div>

          <!-- Col 4: Power-Up Back To Top Button -->
          <div class="md:col-span-2 flex flex-col items-center md:items-end justify-between">
            <button 
              (click)="scrollToTop()"
              (mouseenter)="audioService.playHover()"
              class="group relative px-5 py-4 bg-slate-900 border border-purple-500/40 rounded-xl hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 cursor-pointer text-center"
            >
              <div class="text-2xl group-hover:-translate-y-1 transition-transform">🚀</div>
              <div class="font-display text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-1">
                BACK TO TOP
              </div>
            </button>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 Nusantara Neon Studio Inc. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <a href="javascript:void(0)" class="hover:text-cyan-400">Privacy Policy</a>
            <span>·</span>
            <a href="javascript:void(0)" class="hover:text-cyan-400">Terms of Service</a>
            <span>·</span>
            <a href="javascript:void(0)" class="hover:text-cyan-400">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterHudComponent {
  audioService = inject(AudioService);

  scrollToTop() {
    this.audioService.playClick();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
