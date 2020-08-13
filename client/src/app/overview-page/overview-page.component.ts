import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})


export class OverviewPageComponent implements OnInit, AfterViewInit {
  @ViewChild('dropmenu', {static: false}) dropmenuRef: ElementRef;

  ngAfterViewInit() {
    MaterialService.initDropMenu(this.dropmenuRef);
  }

  constructor() { }

  ngOnInit() {

  }

}
