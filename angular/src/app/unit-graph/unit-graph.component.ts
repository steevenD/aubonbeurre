import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-graph',
  templateUrl: './unit-graph.component.html',
  styleUrls: ['./unit-graph.component.css']
})
export class UnitGraphComponent implements OnInit {

  @Input() data: any;
  @Input() unit: number;
  
  view: number[];
  dataMin: number;
  dataMax: number;
  dataSegmentBig: number;
  colorScheme = {
    domain: ['#ff0000', '#ff0080', '#ff00ff', '#8000ff', '#0000ff', '#0080ff', '#00ffff', '#00ff80', '#00ff00', '#80ff00', '#ffff00', '#ff8000']
  };
  units: string;
  valueFormatting = () => {
    return "UNIT - " + (this.unit + 1);
  };
  
  constructor() { }

  ngOnInit() {
    this.units = "degré celsius";
    this.data = this.data;

    this.checkDataOptions();
  }

  checkDataOptions(){
    this.dataMax = 20;
    this.dataMin = 0;
    this.dataSegmentBig = 5 % (this.dataMax - this.dataMin);
  }


}
