import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { GamesViewComponent } from './views/games-view/games-view.component';
import { GameDetailViewComponent } from './views/game-detail-view/game-detail-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { CareersViewComponent } from './views/careers-view/careers-view.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'games', component: GamesViewComponent },
  { path: 'games/:id', component: GameDetailViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'careers', component: CareersViewComponent },
  { path: 'blog', component: BlogViewComponent },
  { path: 'contact', component: HomeViewComponent },
  { path: '**', component: NotFoundViewComponent }
];
