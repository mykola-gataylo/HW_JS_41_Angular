import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Angular 2Do';
  subTitle = 'Education of Angular';

  constructor() {
    
  }

  ngOnInit(): void {
  }

}