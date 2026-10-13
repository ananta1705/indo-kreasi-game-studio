import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';
import { MascotKipaComponent } from '../mascot-kipa/mascot-kipa.component';

@Component({
  selector: 'app-quest-complete-modal',
  standalone: true,
  imports: [CommonModule, MascotKipaComponent],
  template: `
    <div 
      *ngIf="stateService.questCompleteModal().open"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in"
    >
      <div class="relative w-full max-w-lg bg-slate-950 rounded-2xl border-2 border-emerald-400 p-8 shadow-[0_0_60px_rgba(52,211,153,0.5)] text-center overflow-hidden">
        <!-- Batik Neon Border Line -->
        <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-pulse"></div>

        <!-- Mascot Mascot Animation -->
        <div class="my-4 flex justify-center">
          <app-mascot-kipa size="lg" expression="happy"></app-mascot-kipa>
        </div>

        <div class="font-display font-black text-2xl md:text-3xl text-emerald-400 tracking-wider uppercase mb-2">
          {{ stateService.questCompleteModal().title }}
        </div>

        <div class="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/50 rounded-full font-mono font-bold text-emerald-300 text-sm mb-6">
          🎉 +{{ stateService.questCompleteModal().xp }} XP REWARD UNLOCKED
        </div>

        <p class="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-8">
          Pesan/aplikasi Anda telah terkirim langsung ke Terminal Pusat Nusantara Neon. Tim pengembang kami akan merespons melalui transmisi email dalam 24 jam.
        </p>

        <button 
          (click)="close()"
          (mouseenter)="audioService.playHover()"
          class="w-full py-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 text-slate-950 font-display font-bold text-sm tracking-wider uppercase rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(52,211,153,0.6)] cursor-pointer"
        >
          CLAIM XP & RETURN TO WORLD
        </button>
      </div>
    </div>
  `
})
export class QuestCompleteModalComponent {
  stateService = inject(StateService);
  audioService = inject(AudioService);

  close() {
    this.audioService.playClick();
    this.stateService.closeQuestComplete();
  }
}
