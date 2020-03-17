import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  certificates: any[][] = [
    [
      {
        info:'Received After completion of FOSSEE Fellowship 2018.',
        def: '../assets/loading.gif',
        img: '../assets/fossee.jpg'
      },
      {
        info: `Received on securing the first position on College Coding Competition on 2nd Year of B.Tech.`,
        def: '../assets/loading.gif',
        img: '../assets/c1.jpeg'
      },
      {
        info: `Received on securing the first position at IEEE Technical Quiz on the second semester of B.Tech.`,
        def: '../assets/loading.gif',
        img: '../assets/c2.jpeg'
      }
    ],
    [
      {
        info:'Received on securing the first position on College Coding Competition on 1st Year of B.Tech.',
        def: '../assets/loading.gif',
        img: '../assets/c3.jpeg'
      },
      {
        info: `Received on completion of NPTEL online course on "Problem solving through programming in c" with score 93%.`,
        def: '../assets/loading.gif',
        img: '../assets/np.jpeg'
      },
      {
        info: `Received when our project prototype was selected on Dr Kalam Innovation gallery.`,
        def: '../assets/loading.gif',
        img: 'https://drive.google.com/uc?export=view&id=1nAgsIy_faObMePh2RsUBAaJyuID1fOCd'
      }
    ],
  ];
  constructor() { }

  ngOnInit() {
  }

}
