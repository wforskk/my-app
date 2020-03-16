import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from '../data.service';

@Component({
  selector: 'app-ignite-grid',
  templateUrl: './ignite-grid.component.html',
  styleUrls: ['./ignite-grid.component.scss']
})
export class IgniteGridComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid: IgxGridComponent;
  // public localData = [{ 'test1': 'test', 'test2': 'test', 'test3': 'test', },{ 'test1': 'test', 'test2': 'test', 'test3': 'test', }]
  public localData: string[];
  public data: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.data = athletesData;
  }

}

