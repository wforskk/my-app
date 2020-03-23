import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, SortingDirection } from 'igniteui-angular';
import { localData } from '../data'

@Component({
  selector: 'app-ignite-grid',
  templateUrl: './ignite-grid.component.html',
  styleUrls: ['./ignite-grid.component.scss']
})
export class IgniteGridComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid: IgxGridComponent;
  public dataList: localData[] = [];
  private _URL = 'https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid.html';
  private _longLength = 'テスト用の文字列。';
  private _filterTarget = ['Mac', 'Windows', 'Linux', 'Unix', 'IOS', 'Android'];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this._longLength += this._longLength;
    }
    // console.log('test1');
    for (let i = 0; i < 250; i++) {
      // console.log(i.toString());
      this.dataList.push(
        {
          'ID': i.toString(),
          'name': 'abcd' + i.toString(),
          'URL': this._URL + i.toString(),
          'test1': this._longLength,
          'test2': this._filterTarget[i % 6],
          'test3': 'test3_' + i.toString()
        }
      )
    }
    this.grid.sortingExpressions = [
      { fieldName: 'ID', dir: SortingDirection.Asc, ignoreCase: true }
  ];
  }// onInite
  checkSelectable() {
    return false;
  }
  public redClass = {
    // red: () => {return true;}
    red: true,
  }

}

