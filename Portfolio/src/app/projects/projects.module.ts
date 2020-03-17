import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  { path: '', component: ProjectsComponent }
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule
  ]
})
export class ProjectsModule {

  open(url) {
    window.open(url, '_blankk');
  }
}
