import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorDto } from '../dtos/proveedor.dto';
import { AuthService } from '../services/auth.service';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Proveedores: ProveedorDto[] = [];
  nombreUsuario = '';

  constructor(private proveedor: ProveedorService,
    private authService: AuthService,
    private router :Router) { this.nombreUsuario = this.authService.getSession().Nombre;}

  ngOnInit() {
    this.finall();
  }

  provedor: any[]=[];
  finall(){
      this.proveedor.findAll().subscribe((res: any) =>{
        this.Proveedores = res;
        console.log(res);
      })
    }
  

  logout(){
    this.authService.deleteSession();
    this.router.navigate(['login']).then();
  }

  nuevoProveedor(){
    this.router.navigate(['proveedor']).then();
  }

}
