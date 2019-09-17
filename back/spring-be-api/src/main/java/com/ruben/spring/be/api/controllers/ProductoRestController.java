package com.ruben.spring.be.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ruben.spring.be.api.models.entity.Producto;
import com.ruben.spring.be.api.models.services.IProductoService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ProductoRestController {
	
	@Autowired
	private IProductoService productoService;
	
	@GetMapping("/productos")
	public List<Producto> index() {
		return productoService.findAll();
	}
	
	@GetMapping("/productos/{id}")
	public Producto show(@PathVariable Long id) {
		return productoService.findById(id);
	}
	
	@PostMapping("/productos")
	public Producto create(@RequestBody Producto producto) {
		return productoService.save(producto);
	}

	@PutMapping("/productos/{id}")
	public Producto update(@RequestBody Producto producto, @PathVariable Long id) {
		Producto productoActual = productoService.findById(id);
		
		productoActual.setDescripcion(producto.getDescripcion());
		productoActual.setNombre(producto.getNombre());
		productoActual.setPrecioFinal(producto.getPrecioFinal());
		
		return productoService.save(productoActual);
	}
	
	@DeleteMapping("/productos/{id}")
	public void delete(@PathVariable Long id) {
		productoService.delete(id);
	}
	
}
