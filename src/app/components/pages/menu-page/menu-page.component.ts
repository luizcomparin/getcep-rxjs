import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostalCodeService } from 'src/app/services/postal-code.service';
import { IBrasilCepAPI } from '../../types/address.interface';

@Component({
	selector: 'app-menu-page',
	templateUrl: './menu-page.component.html',
	styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent {
	constructor(
		private router: Router,
		private postalCodeService: PostalCodeService
	) {}

	addressList$ = this.postalCodeService.addressList$;
	routerDOM = this.router;

	redirectToNewAddressPage() {
		this.routerDOM.navigateByUrl('/address');
	}
}
