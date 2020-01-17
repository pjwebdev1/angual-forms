import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  constructor() { }

  ngOnInit() {
  }

}
