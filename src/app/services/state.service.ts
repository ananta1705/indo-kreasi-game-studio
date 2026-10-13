import { Injectable, signal } from '@angular/core';
import { GameItem } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  language = signal<'ID' | 'EN'>('ID');
  performanceMode = signal<boolean>(false);
  isLoaded = signal<boolean>(false);
  activeTrailer = signal<GameItem | null>(null);
  isArcadeUnlocked = signal<boolean>(false);
  questCompleteModal = signal<{ open: boolean; title: string; xp: number }>({ open: false, title: '', xp: 100 });

  toggleLanguage() {
    this.language.set(this.language() === 'ID' ? 'EN' : 'ID');
  }

  togglePerformanceMode(): boolean {
    const next = !this.performanceMode();
    this.performanceMode.set(next);
    return next;
  }

  openTrailer(game: GameItem) {
    this.activeTrailer.set(game);
  }

  closeTrailer() {
    this.activeTrailer.set(null);
  }

  triggerQuestComplete(title = 'QUEST COMPLETE!', xp = 100) {
    this.questCompleteModal.set({ open: true, title, xp });
  }

  closeQuestComplete() {
    this.questCompleteModal.set({ open: false, title: '', xp: 0 });
  }

  unlockArcadeMode() {
    this.isArcadeUnlocked.set(true);
  }
}
