import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.css']
})
export class ViewTypeComponent implements OnInit {
  @Output() choose: EventEmitter<string> = new EventEmitter();
  type: string;

  private storageKey = 'viewType';

  constructor() { }

  ngOnInit() {
    const savedValue: string = localStorage.getItem(this.storageKey);
    this.type = savedValue || 'decimal';
    this.emit();
  }

  select(type: string) {
    this.type = type;
    localStorage.setItem(this.storageKey, type);
    this.emit();
  }

  emit() {
    this.choose.next(this.type);
  }

}
