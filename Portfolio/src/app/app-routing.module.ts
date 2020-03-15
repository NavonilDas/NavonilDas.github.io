import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
    {
        path: 'skills',
        loadChildren: './skills/skills.module#SkillsModule'
    },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule'
    },
    {
        path: 'certificates',
        loadChildren: './certificate/certificate.module#CertificateModule'
    },
    {
        path: 'education',
        loadChildren: './education/education.module#EducationModule'
    },
    {
        path: 'profiles',
        loadChildren: './profiles/profiles.module#ProfilesModule'
    },
    {
        path: '',
        component: ExperienceComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }