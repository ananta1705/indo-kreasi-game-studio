import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticleBgComponent } from './components/particle-bg/particle-bg.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarHudComponent } from './components/navbar-hud/navbar-hud.component';
import { FooterHudComponent } from './components/footer-hud/footer-hud.component';
import { TrailerModalComponent } from './components/trailer-modal/trailer-modal.component';
import { ArcadeModalComponent } from './components/arcade-modal/arcade-modal.component';
import { QuestCompleteModalComponent } from './components/quest-complete-modal/quest-complete-modal.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParticleBgComponent,
    LoadingScreenComponent,
    NavbarHudComponent,
    FooterHudComponent,
    TrailerModalComponent,
    ArcadeModalComponent,
    QuestCompleteModalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
