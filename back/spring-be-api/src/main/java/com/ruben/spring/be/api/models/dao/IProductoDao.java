package com.ruben.spring.be.api.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.ruben.spring.be.api.models.entity.Producto;

public interface IProductoDao extends CrudRepository<Producto, Long> {

}
