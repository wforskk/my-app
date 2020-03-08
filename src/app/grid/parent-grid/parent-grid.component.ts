import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-parent-grid',
  templateUrl: './parent-grid.component.html',
  styleUrls: ['./parent-grid.component.scss']
})
export class ParentGridComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid: IgxGridComponent;
  public localData = [{ 'test1': 'test', 'test2': 'test', 'test3': 'test', },{ 'test1': 'test', 'test2': 'test', 'test3': 'test', }]
  // public localData =[]
  constructor() { }

  ngOnInit(): void {
  }

}
