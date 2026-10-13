import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../../services/game-data.service';
import { StateService } from '../../services/state.service';
import { AudioService } from '../../services/audio.service';
import { QuestJob } from '../../models/game.model';

@Component({
  selector: 'app-careers-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-12">
      
      <!-- Quest Board Header -->
      <div class="space-y-4">
        <div class="font-mono text-xs text-pink-400 font-bold uppercase tracking-widest flex items-center gap-2">
          <span>QUEST_BOARD // JOIN THE GUILD</span>
        </div>
        <h1 class="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
          MISI REKRUTMEN STUDIO
        </h1>
        <p class="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Pilih misi Anda dan bergabunglah dengan tim Nusantara Neon. Kami menawarkan standar remunerasi AAA, fleksibilitas hybrid/remote, dan budaya kerja tanpa crunch time.
        </p>
      </div>

      <!-- Department Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
        <button 
          *ngFor="let dept of departments"
          (click)="activeDept.set(dept)"
          (mouseenter)="audioService.playHover()"
          class="px-4 py-2 rounded-lg font-bold transition-all cursor-pointer"
          [ngClass]="activeDept() === dept 
            ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
            : 'bg-slate-900 text-slate-400 hover:text-white'"
        >
          {{ dept }}
        </button>
      </div>

      <!-- Jobs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          *ngFor="let job of filteredJobs()"
          class="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between font-mono text-xs">
              <span 
                class="px-2.5 py-1 rounded font-bold uppercase"
                [ngClass]="{
                  'bg-red-500/20 text-red-400 border border-red-500/40': job.difficulty === 'LEGENDARY',
                  'bg-amber-500/20 text-amber-300 border border-amber-500/40': job.difficulty === 'HARD',
                  'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40': job.difficulty === 'EASY'
                }"
              >
                ⚔️ {{ job.difficulty }} QUEST
              </span>

              <span class="text-cyan-400 font-bold">
                +{{ job.xpReward }} XP REWARD
              </span>
            </div>

            <h3 class="font-display font-bold text-2xl text-white">
              {{ job.title }}
            </h3>

            <div class="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400">
              <span>📍 {{ job.location }}</span>
              <span>·</span>
              <span>💼 {{ job.type }}</span>
              <span>·</span>
              <span class="text-purple-300">{{ job.department }}</span>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed">
              {{ job.description }}
            </p>

            <div class="space-y-1.5 font-mono text-[11px] text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div class="font-bold text-cyan-400 mb-1">REQ PERSYARATAN UTAMA:</div>
              <div *ngFor="let req of job.requirements" class="flex items-start gap-1.5">
                <span class="text-pink-400">▹</span>
                <span>{{ req }}</span>
              </div>
            </div>
          </div>

          <button 
            (click)="selectedJob.set(job); audioService.playClick()"
            (mouseenter)="audioService.playHover()"
            class="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] transition-all cursor-pointer"
          >
            ACCEPT QUEST (APPLY NOW) →
          </button>
        </div>
      </div>

      <!-- Application Modal -->
      <div 
        *ngIf="selectedJob()"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
      >
        <div class="relative w-full max-w-2xl bg-slate-950 rounded-2xl border border-cyan-400 p-8 shadow-[0_0_50px_rgba(34,211,238,0.4)] space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div class="font-mono text-xs text-cyan-400 font-bold">APPLYING FOR QUEST</div>
              <div class="font-display font-bold text-xl text-white">{{ selectedJob()?.title }}</div>
            </div>
            <button (click)="selectedJob.set(null)" class="text-slate-400 hover:text-white font-mono text-xs">✕ CANCEL</button>
          </div>

          <form (submit)="submitApplication($event)" class="space-y-4 font-mono text-xs">
            <div>
              <label for="applicant-name" class="block text-slate-300 font-bold mb-1">NAMA LENGKAP *</label>
              <input id="applicant-name" type="text" required placeholder="e.g. Bima Arya" class="w-full p-3 bg-slate-900 border border-slate-800 rounded text-white focus:border-cyan-400"/>
            </div>

            <div>
              <label for="applicant-portfolio" class="block text-slate-300 font-bold mb-1">LINK PORTOFOLIO / GITHUB / ARTSTATION *</label>
              <input id="applicant-portfolio" type="url" required placeholder="https://artstation.com/yourprofile" class="w-full p-3 bg-slate-900 border border-slate-800 rounded text-white focus:border-cyan-400"/>
            </div>

            <div>
              <label for="applicant-motivation" class="block text-slate-300 font-bold mb-1">MOTIVASI BERGABUNG *</label>
              <textarea id="applicant-motivation" rows="3" required placeholder="Ceritakan pengalaman terhebat Anda dalam pembuatan game..." class="w-full p-3 bg-slate-900 border border-slate-800 rounded text-white focus:border-cyan-400"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer">
              SUBMIT QUEST APPLICATION (+{{ selectedJob()?.xpReward }} XP)
            </button>
          </form>
        </div>
      </div>

    </div>
  `
})
export class CareersViewComponent {
  gameData = inject(GameDataService);
  stateService = inject(StateService);
  audioService = inject(AudioService);

  activeDept = signal<string>('All');
  selectedJob = signal<QuestJob | null>(null);

  departments = ['All', 'Game Engineering', 'Game Art & 3D', 'Lore & Narrative', 'Audio & Music'];

  filteredJobs = computed(() => {
    const list = this.gameData.questJobs();
    const dept = this.activeDept();
    if (dept === 'All') return list;
    return list.filter(j => j.department === dept);
  });

  submitApplication(e: Event) {
    e.preventDefault();
    const xp = this.selectedJob()?.xpReward || 5000;
    this.selectedJob.set(null);
    this.audioService.playQuestComplete();
    this.stateService.triggerQuestComplete('QUEST APPLICATION ACCEPTED!', xp);
  }
}
