import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FloatingMenuComponent } from './home/floating-menu/floating-menu.component';
import { FooterComponent } from './home/footer/footer.component';
import { ScrollmenuComponent } from './home/scrollmenu/scrollmenu.component';
import { ProductgridComponent } from './home/productgrid/productgrid.component';
import { CarouselInternalComponent } from './home/carousel-internal/carousel-internal.component';
import { Card1Component } from './home/card1/card1.component';
import { SMenuComponent } from './smenu/smenu.component';
import { FAQComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { VmenuComponent } from './vmenu/vmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { Vivo1Component } from './vivo1/vivo1.component';
import { ComparemobileComponent } from './home/comparemobile/comparemobile.component';
import { ComparedataService } from './services/comparedata.service';
import { FilterPipe } from './home/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PricefilterPipe,
    SMenuComponent,
    VmenuComponent,
    FAQComponent,
    InfoComponent,
    NavbarComponent,
    CarouselComponent,
    FloatingMenuComponent,
    FooterComponent,
    ScrollmenuComponent,
    ProductgridComponent,
    CarouselInternalComponent,
    Card1Component,
    Vivo1Component,
    ComparemobileComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule
  ],
  providers: [ComparedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
