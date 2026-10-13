import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-20">
      
      <!-- Studio Header -->
      <section class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono text-xs">
          <span>MISSION MANIFESTO</span>
        </div>
        <h1 class="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          NARRATIVE & VISION
        </h1>
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
          Nusantara Neon didirikan atas satu visi berani: Membangun studio game AAA kelas dunia yang mengangkat kekayaan mitologi, arsitektur, dan filosofi Nusantara ke dalam standar hiburan digital global.
        </p>
      </section>

      <!-- Level Map Timeline / Production Milestones -->
      <section class="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/30 space-y-8">
        <div class="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest text-center">
          [ LEVEL MAP TIMELINE STUDIO ]
        </div>

        <div class="relative border-l-2 border-purple-500/40 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          <div *ngFor="let step of studioTimeline" class="relative group">
            <!-- Node Marker -->
            <div class="absolute -left-[31px] sm:-left-[47px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-[10px] text-cyan-300 font-mono font-bold shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              ✓
            </div>

            <div class="font-mono text-xs text-pink-400 font-bold mb-1">{{ step.year }} // {{ step.phase }}</div>
            <h3 class="font-display font-bold text-xl text-white mb-2">{{ step.title }}</h3>
            <p class="text-xs text-slate-300 leading-relaxed max-w-2xl">{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Skill Tree Matrix -->
      <section class="space-y-8">
        <div class="text-center max-w-2xl mx-auto">
          <div class="font-mono text-xs text-pink-400 font-bold uppercase tracking-widest">
            [ SKILL TREE PIPELINE ]
          </div>
          <h2 class="font-display font-black text-3xl text-white">
            KEAHLIAN TEKNOLOGI STUDIO
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div *ngFor="let node of skillNodes" class="glass-panel p-6 rounded-2xl border border-purple-500/20 space-y-3">
            <div class="text-2xl">{{ node.icon }}</div>
            <div class="font-display font-bold text-base text-white">{{ node.title }}</div>
            <p class="text-slate-400 leading-relaxed text-[11px]">{{ node.desc }}</p>
            <div class="pt-2 text-cyan-400 font-bold">NODE STATUS: MAXED OUT ★</div>
          </div>
        </div>
      </section>

    </div>
  `
})
export class AboutViewComponent {
  audioService = inject(AudioService);

  studioTimeline = [
    {
      year: '2023',
      phase: 'PHASE 01',
      title: 'Pebentukan Nusantara Neon Studio',
      desc: 'Berkumpulnya veteran pengembang game dari Asia Tenggara dan Eropa di Jakarta dengan komitmen membangun mahakarya AAA.'
    },
    {
      year: '2024',
      phase: 'PHASE 02',
      title: 'Pendanaan Seri-A & Riset Photogrammetry',
      desc: 'Pemindaian 3D LiDAR pertama pada situs candi bersejarah dan kemitraan resmi dengan Epic Games MegaGrants.'
    },
    {
      year: '2025',
      phase: 'PHASE 03',
      title: 'Peluncuran Dayak: Guardians of Borneo',
      desc: 'Game pertama dirilis secara global dan memenangkan penghargaan GOTY Southeast Asia 2025.'
    },
    {
      year: '2026',
      phase: 'PHASE 04',
      title: 'Pengembangan Wayang 2099: Shadow Protocol',
      desc: 'Mencapai target 420,000+ Wishlist di Steam dan konfirmasi rilis di PlayStation 5 & Xbox Series X.'
    }
  ];

  skillNodes = [
    { icon: '🔮', title: 'UE5 Nanite & Lumen', desc: 'Sistem pencahayaan giat real-time dengan geometri milyaran poligon.' },
    { icon: '🧬', title: 'Karsa Motion Capture', desc: 'Merekam gerakan pencak silat asli pesilat nasional untuk animasi animasi kombo.' },
    { icon: '🎧', title: 'Wwise Spatial Audio', desc: 'Akustik ruangan 3D yang menyimulasikan gema perunggu gamelan di ruang tertutup.' },
    { icon: '🛡️', title: 'Multiplayer Dedicated', desc: 'Netcode server-authoritative dengan kompensasi latensi rendah.' }
  ];
}
