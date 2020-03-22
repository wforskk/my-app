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
  @Input() public gridData: IgxGridComponent;
  @ViewChild('input') public input: NgModel;
  public inputValue: any;
  public items: SelectItems[] = [];

  constructor(private iconService: IgxIconService) { }

  ngOnInit(): void {
    // セレクトボックスのリスト。boolで初期値を設定する。
    this.items = [
      { 'item': 5, 'init': false },
      { 'item': 10, 'init': false },
      { 'item': 15, 'init': false },
      { 'item': 20, 'init': true },
      { 'item': 50, 'init': false },
      { 'item': 100, 'init': false },
      { 'item': 200, 'init': false }
    ]

    // ページングで使用するアイコンを設定する。/Users/hulkkk/AngularProjects/my-app/src
    this.iconService.addSvgIcon("first", "/assets/icons/first_page-24px.svg", "paging-icons");
    this.iconService.addSvgIcon("previouse", "/assets/icons/chevron_left-24px.svg", "paging-icons");
    this.iconService.addSvgIcon("next", "/assets/icons/chevron_right-24px.svg", "paging-icons");
    this.iconService.addSvgIcon("last", "/assets/icons/last_page-24px.svg", "paging-icons");

    // inputの初期値を設定する。
    this.inputValue = this.gridData.page + 1;
  }

  selectPerPage(selectValue: any) {
    this.gridData.perPage = selectValue['newSelection'].value;
    this.inputValue = this.gridData.page + 1;
    console.log('select');
  }
  first() {
    this.gridData.paginate(0);
    this.inputValue = this.gridData.page + 1;
    console.log('first');
  }
  previouse() {
    this.gridData.previousPage();
    this.inputValue = this.gridData.page + 1;
    console.log('previouse');
  }
  setOptionalPage(inputValue: any) {
    console.log('number');
    if (typeof Math.floor(inputValue.target.value) !== 'number') {
      return;
    }
    console.log('min&max');
    if (Math.floor(inputValue.target.value) > this.gridData.totalPages ||
      Math.floor(inputValue.target.value) < 1) {
      return;
    }
    this.gridData.paginate(Number(inputValue.target.value));
    console.log('enter');
    console.log(inputValue);
    console.log(inputValue.target.value);
  }
  resetInput() {
    this.inputValue = this.gridData.page + 1;
    console.log('reset');
  }
  next() {
    this.gridData.nextPage();
    this.inputValue = this.gridData.page + 1;
    console.log('next');
  }
  last() {
    this.gridData.paginate(this.gridData.totalPages - 1);
    this.inputValue = this.gridData.page + 1;
    console.log('last');
  }

}
