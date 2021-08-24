import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { NvgComponent } from './components/header/nvg/nvg.component';
import { HeadlineComponent } from './components/header/headline/headline.component';

import { SildeComponent } from './components/header/silde/silde.component';
import { OutletComponent } from './components/outlet/outlet.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    NvgComponent,
    HeadlineComponent,
   
    SildeComponent,
        OutletComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
