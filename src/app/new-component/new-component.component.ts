import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
cmpt = 'new component interpolation is checked....';
  constructor() { }

  ngOnInit(): void {
  }

}
