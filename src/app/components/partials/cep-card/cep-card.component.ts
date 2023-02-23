import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBrasilCepAPI } from '../../types/address.interface';

@Component({
	selector: 'app-cep-card',
	templateUrl: './cep-card.component.html',
	styleUrls: ['./cep-card.component.scss'],
})
export class CepCardComponent {
	constructor(private router: Router) {}

	@Input() address!: IBrasilCepAPI;

	hovered: boolean = false;

	goToAddressPage(addressName: string) {
		this.router.navigateByUrl(`/address/${addressName}`);
	}

	hover() {
		this.hovered = true;
	}

	notHover() {
		this.hovered = false;
	}
}
