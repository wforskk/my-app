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

    const me = this.renderer.parentNode(this.test2.nativeElement);

    const me2 = this.renderer.parentNode(me);
    const me3 = this.renderer.parentNode(me2);
    const me4 = this.renderer.parentNode(me3);

    console.log(this.renderer);
    console.log(this.renderer.parentNode(this.test2.nativeElement));
    console.log(this.test2.nativeElement.childNodes[0]);
    console.log('me');
    console.log(this.renderer.parentNode(me));
    console.log(me.childNodes[0]);
    console.log(me.childNodes[1]);
    console.log('me2');
    console.log(this.renderer.parentNode(me2));
    console.log(me2.childNodes[0]);
    console.log(me2.childNodes[1]);
    console.log('me3');
    console.log(this.renderer.parentNode(me3));
    console.log(me3.childNodes[0]);
    console.log(me3.childNodes[1]);
    console.log('me4');
    console.log(this.renderer.parentNode(me4));
    console.log(me4.childNodes[0]);
    console.log(me4.childNodes[1]);
    console.log(me4);

    this.renderer.listen(btn, 'click', (event) => {
      this.renderer.removeChild(this.test2.nativeElement, btn);
    });
  }
}
