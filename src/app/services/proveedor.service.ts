import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProveedorDto } from '../dtos/proveedor.dto';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<ProveedorDto[]>(`${environment.apiUrl}/Proveedor`);
  }

  register(proveedor: ProveedorDto){
    return this.http.post(`${environment.apiUrl}/Proveedor`, proveedor );
  }
}
