import { Component, OnInit, Optional } from '@angular/core';
import { ParentComponent } from '../parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(
    @Optional() public parent?: ParentComponent,
   ) { }

  ngOnInit(): void {
  }
  getParent(){
    console.log('child');
    console.log(this.parent);
  }
}
