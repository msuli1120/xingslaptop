import { Injectable } from '@angular/core';
import { Pc } from 'app/pc.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class PcService {
   pcs: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFireDatabase) {this.pcs = angularFire.list('/pcs');
 }

    getPcs() {
      return this.pcs;
    }
}
