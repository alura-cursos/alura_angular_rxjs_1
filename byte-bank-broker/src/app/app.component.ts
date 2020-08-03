import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.title = environment.name;
    this.titleService.setTitle(this.title);
  }
}
