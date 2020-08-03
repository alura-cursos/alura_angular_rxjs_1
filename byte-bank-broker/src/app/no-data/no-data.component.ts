import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css'],
})
export class NoDataComponent implements OnInit {
  noDataFound = 'Não há dados';

  constructor() {}

  ngOnInit(): void {}
}
