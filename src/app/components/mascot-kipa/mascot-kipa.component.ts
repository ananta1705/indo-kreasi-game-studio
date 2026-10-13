import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mascot-kipa',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="relative inline-flex items-center justify-center select-none"
      [ngClass]="{
        'w-16 h-16': size === 'sm',
        'w-28 h-28': size === 'md',
        'w-40 h-40': size === 'lg'
      }"
    >
      <!-- Glow Aura -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>

      <!-- KIPA Character SVG -->
      <svg viewBox="0 0 120 120" class="w-full h-full relative z-10 animate-float drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
        <!-- Feathered Crest (Crown Garuda) -->
        <path d="M60 10 L68 28 L82 20 L72 36 L90 38 L74 48 L60 40 L46 48 L30 38 L48 36 L38 20 L52 28 Z" fill="#FBBF24" stroke="#8B5CF6" stroke-width="2"/>
        
        <!-- Head Base -->
        <ellipse cx="60" cy="62" rx="36" ry="32" fill="#0A0B1A" stroke="#8B5CF6" stroke-width="3"/>
        
        <!-- Batik Wing Overlay Left -->
        <path d="M24 62 C10 68 8 84 20 92 C28 84 30 72 26 62 Z" fill="#1A1D3F" stroke="#22D3EE" stroke-width="2"/>
        <path d="M16 75 L24 82" stroke="#FF3D8B" stroke-width="2"/>

        <!-- Batik Wing Overlay Right -->
        <path d="M96 62 C110 68 112 84 100 92 C92 84 90 72 94 62 Z" fill="#1A1D3F" stroke="#22D3EE" stroke-width="2"/>
        <path d="M104 75 L96 82" stroke="#FF3D8B" stroke-width="2"/>

        <!-- Cyber Visor / Goggles -->
        <rect x="34" y="50" width="52" height="22" rx="8" fill="#11132B" stroke="#22D3EE" stroke-width="2.5"/>
        
        <!-- Visor LED Screen / Eyes -->
        <g *ngIf="expression === 'happy'">
          <circle cx="48" cy="61" r="5" fill="#22D3EE"/>
          <circle cx="72" cy="61" r="5" fill="#22D3EE"/>
          <path d="M46 58 L50 58 M70 58 L74 58" stroke="#FFFFFF" stroke-width="1.5"/>
        </g>
        <g *ngIf="expression === 'alert'">
          <polygon points="44,64 52,58 52,64" fill="#FF3D8B"/>
          <polygon points="76,64 68,58 68,64" fill="#FF3D8B"/>
        </g>
        <g *ngIf="expression === 'gameover'">
          <path d="M44 57 L52 65 M52 57 L44 65" stroke="#F43F5E" stroke-width="2.5"/>
          <path d="M68 57 L76 65 M76 57 L68 65" stroke="#F43F5E" stroke-width="2.5"/>
        </g>

        <!-- Golden Cyber Beak -->
        <path d="M54 70 L60 82 L66 70 Z" fill="#FBBF24" stroke="#8B5CF6" stroke-width="1.5"/>

        <!-- Cheek Glow LED -->
        <circle cx="32" cy="72" r="3" fill="#FF3D8B" opacity="0.8"/>
        <circle cx="88" cy="72" r="3" fill="#FF3D8B" opacity="0.8"/>
      </svg>
    </div>
  `
})
export class MascotKipaComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() expression: 'happy' | 'alert' | 'gameover' = 'happy';
}
