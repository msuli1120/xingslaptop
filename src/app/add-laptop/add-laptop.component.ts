import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pc } from 'app/pc.model';
@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {
  @Output() newLaptopSender = new EventEmitter();
  submitForm(brand: string, model: string, screenSize: number, processor: string, specs: string, screenType: string, price: number, source: string){
    var newLapTop: Pc = new Pc(brand, model, screenSize, processor, specs, screenType, price, source);
    this.newLaptopSender.emit(newLapTop);
  }
  constructor() { }

  ngOnInit() {
  }

}
