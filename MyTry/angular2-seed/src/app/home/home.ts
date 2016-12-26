import {Component} from '@angular/core';
import {DateRange, Collapse} from 'fuel-ui';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
  animations: [Collapse(300)]
})
export class Home {
  collapsed: boolean = false;
  
  dateRangePickerValue: DateRange;
  
  datePickerValueChange(eventValue: any){
      this.dateRangePickerValue = eventValue;
  }
}
