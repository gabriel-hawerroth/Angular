import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  canShow: boolean = true;
  name = '';

  onClick(canShow: boolean) {
    this.changeShow(canShow);
  }

  private changeShow(canShow: boolean) {
    this.canShow = canShow;
  }

  onInputChange() {
    this.name = (
      document.getElementById('inputName') as HTMLInputElement
    ).value;
  }
}
