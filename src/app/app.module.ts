import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgMaterialsModule } from './primeng-modules';
import { AddressPageComponent } from './components/pages/address-page/address-page.component';
import { MenuPageComponent } from './components/pages/menu-page/menu-page.component';
import { CepCardComponent } from './components/partials/cep-card/cep-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		AddressPageComponent,
		MenuPageComponent,
		CepCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		PrimeNgMaterialsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
