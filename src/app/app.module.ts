import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FirstSectionComponent } from './components/home/first-section/first-section.component';
import { SecondSectionComponent } from './components/home/second-section/second-section.component';
import { ThirdSectionComponent } from './components/home/third-section/third-section.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { PromDescComponent } from './components/prom-desc/prom-desc.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/sign-up/forget-password/forget-password.component';
import { FormRegisterComponent } from './components/sign-up/form-register/form-register.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ListFacturaComponent } from './components/list-factura/list-factura.component';
import { ProductosMasculinosComponent } from './components/productos-masculinos/productos-masculinos.component';
import { ProductosFemeninoComponent } from './components/productos-femenino/productos-femenino.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    ContactUsComponent,
    PromDescComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    FormRegisterComponent,
    InventarioComponent,
    FacturaComponent,
    ListFacturaComponent,
    ProductosMasculinosComponent,
    ProductosFemeninoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
