import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Progressbar',
      urls: [
        { title: 'Dashboard', url: '/' },
        { title: 'ngComponent' },
        { title: 'Progressbar' }
      ]
    },
    component: UserDashboardComponent
  }
];
