var express = require('express');
var todoDao = require('../dao/TodoDao');

//添加到数据库
sysRouter.post('/create', async (req, res, next) => {
  let [result] = await todoDao.create(req.body);
  let [resultAll] = await todoDao.queryAll();
  res.success(resultAll);
});

//按照id来删除某条数据
sysRouter.post('/delete/:id', async (req, res, next) => {
  let [result] = await todoDao.delete(req.params.id);
  let [resultAll] = await todoDao.queryAll();
  res.success(resultAll);
});

//查询数据库所有数据
sysRouter.get('/queryAll', async (req, res, next) => {
  let [result] = await todoDao.queryAll();
  res.success(result);
});

module.exports = sysRouter;
