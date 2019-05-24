import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-graph',
  templateUrl: './unit-graph.component.html',
  styleUrls: ['./unit-graph.component.css']
})
export class UnitGraphComponent implements OnInit {

  @Input() data: any;
  
  view: number[];
  dataMin: number;
  dataMax: number;
  dataSegmentBig: number;
  colorScheme = {
    domain: ['#ff0000', '#ff0080', '#ff00ff', '#8000ff', '#0000ff', '#0080ff', '#00ffff', '#00ff80', '#00ff00', '#80ff00', '#ffff00', '#ff8000']
  };
  units: string;
  valueFormatting = () => {
    let average = 0;
    let unit1 = []
    this.data.forEach(element => {
      average = average + element.value;
    });
    return "Moyenne : " + (average / this.data.length).toFixed(2)
  };
  
  constructor() { }

  ngOnInit() {
    this.units = "degré celsius";

    this.checkDataOptions();
  }

  checkDataOptions(){
    this.dataMax = 20;
    this.dataMin = 0;
    this.dataSegmentBig = 5 % (this.dataMax - this.dataMin);
  }


}
