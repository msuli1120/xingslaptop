import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { PcListComponent } from './pc-list/pc-list.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';
import { FilterProcessorPipe } from './filter-processor.pipe';
import { FilterScreenTypePipe } from './filter-screen-type.pipe';
import { FilterPricePipe } from './filter-price.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    WelcomeComponent,
    AddLaptopComponent,
    FilterProcessorPipe,
    FilterScreenTypePipe,
    FilterPricePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
