import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  size = 30;
  font = 'Arial';
  color = 'rgb(96, 10, 250)';
  classes = ['green-title', 'small-title'];
  underline = ['underline-title'];

  constructor() {}

  ngOnInit(): void {}
}
