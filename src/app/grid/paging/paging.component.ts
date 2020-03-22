import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { NgModel } from '@angular/forms';
import { SelectItems } from './select-items';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() public gridData :IgxGridComponent;
  @ViewChild('input') public input:NgModel;
  public items: SelectItems[] = [];

  constructor() { }

  ngOnInit(): void {
    // セレクトボックスのリスト。
    this.items = [
      {'item': 5, 'init':false},
      {'item': 10, 'init':false},
      {'item': 15, 'init':false},
      {'item': 20, 'init':true},
      {'item': 50, 'init':false},
      {'item': 100, 'init':false},
      {'item': 200, 'init':false}
    ]
  }
  selectPerPage(){
  }
  First(){
  }
  previouse(){
  }
  setOptionalPage(){
  }
  next(){
  }
  last(){
  }

}
