import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
