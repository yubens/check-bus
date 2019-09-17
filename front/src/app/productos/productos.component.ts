import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  delete(producto: Producto): void {
    let response = confirm(`¿Seguro que desea eliminar el producto ${producto.nombre}?`);

    if (response) {
      this.productoService.delete(producto.id)
      .subscribe(
        resp => {
          this.productos = this.productos.filter(prod => prod !== producto);
          alert(`Producto ${producto.nombre} eliminado con exito`);
        }
      );
    }
  }

}
