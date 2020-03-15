import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CertificateComponent }
];

@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CertificateModule { }
