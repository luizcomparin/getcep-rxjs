import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, pipe, take, tap } from 'rxjs';
import { IBrasilCepAPI } from '../components/types/address.interface';

@Injectable({
	providedIn: 'root',
})
export class PostalCodeService {
	constructor(private httpClient: HttpClient) {}

	addressList$ = new BehaviorSubject<IBrasilCepAPI[]>([]);

	// Using BrasilAPI
	getAddressByZipCode(zipCode: string): Observable<IBrasilCepAPI> {
		return this.httpClient.get<IBrasilCepAPI>(
			`https://brasilapi.com.br/api/cep/v1/${zipCode}`
		);
	}

	// getAddressByZipCode(zipCode: string): Observable<IViaCep> {
	// 	return this.httpClient.get<IViaCep>(
	// 		`https://viacep.com.br/ws/${zipCode}/json`
	// 	);
	// }
}
