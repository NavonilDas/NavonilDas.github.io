import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[][] = [
    [
      {
        name: 'SPB GK Quiz',
        type: 'Personal',
        info: `A`,
        url:'https://play.google.com/store/apps/details?id=com.surajjoshi.spbgkquiz',
        def: '../assets/loading.gif',
        img: 'https://lh3.googleusercontent.com/U4_YILxnGRxlRCz-TMTuasu3A7O0G1nGeLDjsfWDF7lKZ3FggThV8OjC5mIFes91Lkk=w1536-h722-rw'
      },
      {
        name: 'Dimasa Dictonary',
        type: 'Freelance',
        info: ``,
        url:'https://play.google.com/store/apps/details?id=com.nitalijohori.dimasadictionary',
        def: '../assets/loading.gif',
        img: 'https://lh3.googleusercontent.com/vbliU51FYKT2CAi-KWhAEtWFb_DHmIJ423U78dZtCKAcDzc_C1WnNk7yY6NMfyq_wHg=w1536-h722-rw'
      }
    ],
    [
      {
        name: '',
        type: '',
        info: ``,
        url:'',
        def: '../assets/loading.gif',
        img: ''
      }
    ]
  ];
  constructor() { }

  ngOnInit() {
  }

}
