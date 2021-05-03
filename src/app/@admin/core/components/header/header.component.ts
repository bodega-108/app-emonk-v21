import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
 
  public toggledValue : Boolean = true;
  @Output() toggleEvent = new EventEmitter();

  toggled(){
    if(this.toggledValue === undefined) {
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;

    this.toggleEvent.emit(this.toggledValue);
  }
}
