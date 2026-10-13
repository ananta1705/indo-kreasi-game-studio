import { Component, ElementRef, OnInit, OnDestroy, ViewChild, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

@Component({
  selector: 'app-particle-bg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <!-- Perspective Cyber Grid -->
      <div 
        class="absolute inset-0 cyber-grid opacity-30 transition-opacity duration-700"
        [ngClass]="{ 'opacity-10': stateService.performanceMode() }"
      ></div>
      
      <!-- Volumetric Neon Gradient Orbs -->
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div class="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl animate-pulse-glow" style="animation-delay: 4s;"></div>

      <!-- HTML5 Canvas Particles -->
      <canvas 
        #particleCanvas 
        class="w-full h-full block"
        [class.hidden]="stateService.performanceMode()"
      ></canvas>
    </div>
  `
})
export class ParticleBgComponent implements OnInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  stateService = inject(StateService);

  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private mouse = { x: -1000, y: -1000 };

  constructor() {
    effect(() => {
      if (this.stateService.performanceMode()) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    });
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('mousemove', this.onMouseMove);
      this.initCanvas();
      this.startAnimation();
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
      window.removeEventListener('mousemove', this.onMouseMove);
      this.stopAnimation();
    }
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.onResize();

    const colors = ['#8B5CF6', '#22D3EE', '#FF3D8B', '#FBBF24'];
    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 60);
    this.particles = [];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2
      });
    }
  }

  private onResize = () => {
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  private onMouseMove = (e: MouseEvent) => {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  };

  private startAnimation() {
    if (this.animationFrameId || this.stateService.performanceMode()) return;
    const animate = () => {
      this.render();
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  private stopAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private render() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas || !this.ctx) return;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Draw particle
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      // Connect nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.ctx.save();
          this.ctx.globalAlpha = (1 - dist / 120) * 0.15;
          this.ctx.strokeStyle = p.color;
          this.ctx.lineWidth = 0.8;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
          this.ctx.restore();
        }
      }

      // Cursor magnetic light reaction
      const mdx = p.x - this.mouse.x;
      const mdy = p.y - this.mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 150) {
        this.ctx.save();
        this.ctx.globalAlpha = (1 - mdist / 150) * 0.3;
        this.ctx.strokeStyle = '#22D3EE';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
        this.ctx.restore();
      }
    }
  }
}
