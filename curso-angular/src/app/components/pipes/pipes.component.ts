import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  someText: string = 'exemplo de pipe titlecase!';
  today = new Date();
}
