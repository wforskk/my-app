import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IgxGridComponent, IgxIconService } from 'igniteui-angular';
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

  constructor(private iconService: IgxIconService) { }

  ngOnInit(): void {
    // セレクトボックスのリスト。boolで初期値を設定する。
    this.items = [
      {'item': 5, 'init':false},
      {'item': 10, 'init':false},
      {'item': 15, 'init':false},
      {'item': 20, 'init':true},
      {'item': 50, 'init':false},
      {'item': 100, 'init':false},
      {'item': 200, 'init':false}
    ]

  // ページングで使用するアイコンを設定する。/Users/hulkkk/AngularProjects/my-app/src
  this.iconService.addSvgIcon("frist", "/assets/icons/first_page-24px.svg", "paging-icons");
  this.iconService.addSvgIcon("previouse", "/assets/icons/chevron_left-24px.svg", "paging-icons");
  this.iconService.addSvgIcon("next", "/assets/icons/chevron_right-24px.svg", "paging-icons");
  this.iconService.addSvgIcon("last", "/assets/icons/last_page-24px.svg", "paging-icons");
  }
  selectPerPage(){
  }
  First(){
    this.gridData.paginate(0);
  }
  previouse(){
  }
  setOptionalPage(){
  }
  next(){
  }
  last(){
    this.gridData.paginate(this.gridData.totalPages -1);
  }

}
