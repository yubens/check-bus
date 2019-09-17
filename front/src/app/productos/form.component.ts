import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private producto: Producto = new Producto();
  private titulo: string = "Crear Producto";

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    )
     { }

  ngOnInit() {
    this.getProducto();
  }

  create(): void {
    this.titulo = 'Crear Producto';
    this.productoService.create(this.producto)
    .subscribe(
      producto => {
        this.router.navigate(['/productos']);
        alert(`Producto ${producto.nombre} creado con exito!`);
      }
    );
  }

  getProducto(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']

        if(id) {
          this.titulo = 'Editar Producto';
          this.productoService.getProducto(id)
          .subscribe(
            producto => this.producto = producto
          );
        }
      }
    );
  }

  update(): void {
    this.productoService.update(this.producto)
    .subscribe(
      producto => {
        this.router.navigate(['/productos']);
        alert(`Producto ${producto.nombre} actualizado con exito!`);
      }
    );
  }

}
