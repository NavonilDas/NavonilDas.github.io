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
        url: 'https://play.google.com/store/apps/details?id=com.surajjoshi.spbgkquiz',
        def: '../assets/loading.gif',
        img: 'https://lh3.googleusercontent.com/U4_YILxnGRxlRCz-TMTuasu3A7O0G1nGeLDjsfWDF7lKZ3FggThV8OjC5mIFes91Lkk=w1536-h722-rw'
      },
      {
        name: 'Dimasa Dictonary',
        type: 'Freelance',
        info: ``,
        url: 'https://play.google.com/store/apps/details?id=com.nitalijohori.dimasadictionary',
        def: '../assets/loading.gif',
        img: 'https://lh3.googleusercontent.com/vbliU51FYKT2CAi-KWhAEtWFb_DHmIJ423U78dZtCKAcDzc_C1WnNk7yY6NMfyq_wHg=w1536-h722-rw'
      }
    ],
    [
      {
        name: 'Mars Explorer',
        type: 'Prototype',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: ''
      },
      {
        name: 'Stick Figure Animatior',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: 'https://raw.githubusercontent.com/NavonilDas/StickFigureAnimator/master/Screenshot/ss.gif'
      }
    ],
    [
      {
        name: 'Library Automation',
        type: 'Peronal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: ''
      },
      {
        name: 'Spam Classifier',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: ''
      }
    ], [
      {
        name: 'Maze Solver',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/maze.jpg'
      },
      {
        name: 'Recommend Color',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: 'https://raw.githubusercontent.com/NavonilDas/MachineLearning/master/RecommendationSystem/Result.png'
      }
    ],
    [
      {
        name: 'Frontend',
        type: 'Internship',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: ''
      },
      {
        name: 'Potrait X',
        type: 'Personal',
        info: ``,
        url: 'https://github.com/NavonilDas/PortraitX_Angular',
        def: '../assets/loading.gif',
        img: 'https://github.com/NavonilDas/PortraitX_Angular/raw/master/ScreenRecord.gif'
      },
    ]
  ];

  canvasProjects: any[][] = [
    [
      {
        name: 'Car Racer',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/cars.jpg'
      },
      {
        name: 'Hacker Effect',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/hacker.png'
      },
      {
        name: 'Space Shooter',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/space.png'
      },
    ],
    [
      {
        name: 'Paint',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: ''
      },
      {
        name: 'Pie Chart',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/pie.jpg'
      },
      {
        name: 'Sound Anlayser',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/sound.gif'
      },
    ],
    [
      {
        name: 'Tic Tac Game',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/tictac.jpg'
      },
      {
        name: 'Fractal Tree',
        type: 'Personal',
        info: ``,
        url: '',
        def: '../assets/loading.gif',
        img: '../assets/fractaltree.JPG'
      },
    ],
  ];
  constructor() { }

  ngOnInit() {
  }
  open(u) {
    console.log(u)
    if (u != "")
      window.open(u, "_blank");
  }
}
