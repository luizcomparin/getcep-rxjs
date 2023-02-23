import { Component, Input } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
	BehaviorSubject,
	filter,
	find,
	map,
	Observable,
	pipe,
	take,
	tap,
} from 'rxjs';
import { PostalCodeService } from 'src/app/services/postal-code.service';
import { IBrasilCepAPI } from '../../types/address.interface';

@Component({
	selector: 'app-address-page',
	templateUrl: './address-page.component.html',
	styleUrls: ['./address-page.component.scss'],
})
export class AddressPageComponent {
	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private postalCodeService: PostalCodeService
	) {
		this.checkIfNewAddress();
		this.createAddressForm();
	}

	addressForm!: FormGroup;
	routerDOM = this.router;
	object = false;
	address$!: Observable<IBrasilCepAPI>;
	lastSearchedPostalCode!: IBrasilCepAPI;
	// addressList = new BehaviorSubject<IBrasilCepAPI[]>([this.lastSearchedPostalCode])
	addressList$ = this.postalCodeService.addressList$;

	getPostalCode(postalCode: string) {
		this.postalCodeService
			.getAddressByZipCode(postalCode)
			.pipe(take(1))
			.subscribe((dados) => {
				this.lastSearchedPostalCode = dados;

				console.log(
					'lastSearchedPostalCode ',
					this.lastSearchedPostalCode
				);
			});
	}

	getAddressByID(id?: string) {
		if (id) {
			this.addressList$
				.pipe(
					map((addresses) =>
						addresses.find((address) => address.id === id)
					),
					take(1)
				)
				.subscribe((address) => {
					console.log('address', address);
					this.selectedAddress = address as IBrasilCepAPI;
				});
		}
	}

	selectedAddress!: IBrasilCepAPI;

	isNewAddress!: boolean;

	checkIfNewAddress() {
		if (this.addressList$.value[0]) {
			console.log('Endereço existente');
			this.getAddressByID(this.id.toString());

			this.isNewAddress = false;
		} else {
			console.log('Novo endereço');
			this.selectedAddress = {} as IBrasilCepAPI;
			this.isNewAddress = true;
		}
	}

	submit() {
		this.lastSearchedPostalCode.id = this.getId();
		this.lastSearchedPostalCode.name = 'DEUSAJUDA';

		const updatedAddress = [
			...this.addressList$.getValue(),
			this.lastSearchedPostalCode,
		];

		this.addressList$.next(updatedAddress);

		console.log('addressList$', this.addressList$.getValue());
	}

	id: number = 0;
	getId(): string {
		this.id += 1;
		return this.id.toString();
	}

	createAddressForm() {
		this.addressForm = this.formBuilder.group(
			{
				postalCode: [
					this.selectedAddress.cep,
					[Validators.required, Validators.minLength(8)],
				],
				state: [this.selectedAddress.state, [Validators.required]],
				city: [this.selectedAddress.city, [Validators.required]],
				neighborhood: [
					this.selectedAddress.neighborhood,
					[Validators.required],
				],
				street: [this.selectedAddress.street, [Validators.required]],
				name: [this.selectedAddress.name, [Validators.required]],
				number: [this.selectedAddress.number, [Validators.required]],
			},
			{
				validators: [],
			}
		);
	}

	goToMenu() {
		this.routerDOM.navigateByUrl('/menu');
	}

	get formControl() {
		return this.addressForm.controls;
	}
}
