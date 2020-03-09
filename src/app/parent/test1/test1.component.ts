import { Component, OnInit, Optional, forwardRef, SkipSelf, Renderer2 } from '@angular/core';
import { ParentComponent } from '../parent.component';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  providers: [{ provide: parent, useExisting: forwardRef(() => ParentComponent) }],
})
export class Test1Component implements OnInit {

  constructor(
    private rer: Renderer2,
    @SkipSelf() @Optional() public parent?: ParentComponent 
    ) { }

  ngOnInit(): void {
  }
  getParent(){
    console.log('test1');
    console.log(parent);
    console.log(this.rer);
  }

}
