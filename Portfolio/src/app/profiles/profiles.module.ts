import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  { path: '', component: ProfilesComponent }
];

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule,
  ]
})
export class ProfilesModule { }
