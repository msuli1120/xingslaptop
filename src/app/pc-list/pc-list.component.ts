import { Component, OnInit } from '@angular/core';
import { Pc } from 'app/pc.model';
import { PcService } from 'app/pc.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css'],
  providers: [PcService, AngularFireDatabase]
})
export class PcListComponent implements OnInit {
  filterByProcessor = 'All pcs';
  filterByScreenType = 'all';
  filterByPrice = 'all';
  pcs: FirebaseListObservable<any[]>;
  constructor(private pcService: PcService) { }
  ngOnInit() {
    this.pcs = this.pcService.getPcs();
  }
  addLapTop(newTop: Pc) {
    this.pcs.push(newTop);
  }
  proximityBomb(pc) {
    if (pc.brand === 'Dell') {
      return 'bg-warning';
    }else if (pc.brand === 'Lenovo') {
      return 'bg-info';
    }
  }
  onChange(option) {
    this.filterByProcessor = option;
  }
  onChangeScreenType(option) {
    this.filterByScreenType = option;
  }
  onChangePrice(option) {
    this.filterByPrice = option;
  }

}
