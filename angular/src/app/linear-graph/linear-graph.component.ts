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

  view: any[] = [700, 400];

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
      '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.single) {
      console.log('change', changes.data);
      const tabTemp = this.single[0].series;
      this.single[0].series = changes.data.currentValue;
      console.log(this.single);
      if(tabTemp != this.single[0].series) {
        this.single = [...this.single];
        this.ref.detectChanges();
      }


    }
  }


}
