import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ignite-grid',
  templateUrl: './ignite-grid.component.html',
  styleUrls: ['./ignite-grid.component.scss']
})
export class IgniteGridComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid: IgxGridComponent;
  public localData = [{ 'test1': 'test', 'test2': 'test', 'test3': 'test', },{ 'test1': 'test', 'test2': 'test', 'test3': 'test', }]
  // public localData =[]

  ngOnInit(): void {
  }
  @ViewChild('test')
  private test2: ElementRef;
  constructor(private renderer: Renderer2) {
  }

  onClickMe() {
    let btn = this.renderer.createElement('button');
    let text = this.renderer.createText('ボタン作成');

    this.renderer.setAttribute(btn, 'name', 'btnName');
    this.renderer.addClass(btn, 'className');
    this.renderer.setStyle(btn, 'width', '150px');

    this.renderer.appendChild(btn, text);
    this.renderer.appendChild(this.test2.nativeElement, btn);

    this.renderer.listen(btn, 'click', (event) => {
      this.renderer.removeChild(this.test2.nativeElement, btn);
    });
  }
}
