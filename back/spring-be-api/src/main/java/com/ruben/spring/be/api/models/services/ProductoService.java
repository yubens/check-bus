package com.ruben.spring.be.api.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ruben.spring.be.api.models.dao.IProductoDao;
import com.ruben.spring.be.api.models.entity.Producto;

@Service
public class ProductoService implements IProductoService {

	@Autowired
	private IProductoDao productoDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Producto> findAll() {		
		return (List<Producto>) productoDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Producto findById(Long id) {		
		return productoDao.findById(id).orElse(null) ;
	}

	@Override
	@Transactional
	public Producto save(Producto producto) {		
		return productoDao.save(producto);
	}

	@Override
	@Transactional
	public void delete(Long id) {		
		productoDao.deleteById(id);
	}

}
