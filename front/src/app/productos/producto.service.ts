import { Injectable } from '@angular/core';
import { PRODUCTOS } from './productos.json';
import { Producto } from './producto.js';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProductoService {

  constructor(private http: HttpClient) { }
  private urlEndPoint: string = 'http://localhost:8080/api/productos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getProductos(): Observable <Producto[]> {
    // return of(PRODUCTOS);
    return this.http.get<Producto[]>(this.urlEndPoint);

    /*return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Producto[])
    );*/
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders});
  }

  getProducto(id): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`);
  }

  update(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlEndPoint}/${producto.id}`, producto, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

}
