import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPageComponent } from './components/pages/address-page/address-page.component';
import { MenuPageComponent } from './components/pages/menu-page/menu-page.component';

const routes: Routes = [
	{ path: 'menu', component: MenuPageComponent },
	{ path: 'address', component: AddressPageComponent },
	{ path: 'address/:cep', component: AddressPageComponent },
	{ path: '**', redirectTo: 'menu' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
