import { Component, Output, EventEmitter } from '@angular/core';

import { ViewType } from "../view-type.type";

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.css']
})
export class ViewTypeComponent {
  @Output() choose: EventEmitter<ViewType> = new EventEmitter();

  type: ViewType = 'decimal';

  constructor() { }

  select(type: ViewType) {
    this.type = type;
    this.emit();
  }

  emit(){
    this.choose.next(this.type);
  }

}
