import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = ['C/C++','Python','Javascript','Arduino','AVR','IOT','JAVA','Android','Angular','electron','Django','C#','Web Devlopment','Linux']
  constructor() { }

  ngOnInit() {
  }

}
