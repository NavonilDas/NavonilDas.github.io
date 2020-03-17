import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  { path: '', component: CertificateComponent }
];

@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule
  ]
})
export class CertificateModule { }
