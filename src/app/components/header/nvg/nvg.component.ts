import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvg',
  templateUrl: './nvg.component.html',
  styleUrls: ['./nvg.component.css']
})
export class NvgComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
