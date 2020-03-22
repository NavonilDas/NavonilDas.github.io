import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
    {
        path: 'skills',
        loadChildren: './skills/skills.module#SkillsModule',
        data: { animation: 'skills' }
    },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
        data: { animation: 'project' }
    },
    {
        path: 'certificates',
        loadChildren: './certificate/certificate.module#CertificateModule',
        data: { animation: 'certify' }
    },
    {
        path: 'education',
        loadChildren: './education/education.module#EducationModule',
        data: { animation: 'edu' }
    },
    {
        path: 'profiles',
        loadChildren: './profiles/profiles.module#ProfilesModule',
        data: { animation: 'prof' }
    },
    {
        path: '',
        component: ExperienceComponent,
        data: { animation: 'exp' }
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }