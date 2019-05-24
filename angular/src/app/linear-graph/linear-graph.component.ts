import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-linear-graph',
  templateUrl: './linear-graph.component.html',
  styleUrls: ['./linear-graph.component.css']
})
export class LinearGraphComponent implements OnInit, OnChanges {

  @Input()
    data: any[];

  @Input()
    legendY: string;

  @Input()
    nameData: string;

  single: any[];
  multi: any[];

  view: any[] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Temps';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: [
      '#5b646b', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
    ]
  };

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.yAxisLabel = this.legendY;
    this.single = [
      {
        "name": this.nameData,
        "series": this.data
      }
    ];
  }

  onSelect($event) {
    console.log($event)
  }

  sizeChange($event){
    this.view = [$event, $event - 600];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.single) {
      const tabTemp = this.single[0].series;
      this.single[0].series = changes.data.currentValue;
      if(tabTemp != this.single[0].series) {
        this.single = [...this.single];
        this.ref.detectChanges();
      }

    }
  }


}
