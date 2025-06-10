const express = require('express');
const router = express.Router();
const { Store, Item, Tag } = require('../models');

router.get('/', async (req, res) => {
  const stores = await Store.findAll({
    include: [
      { model: Item, attributes: ['id', 'name', 'price'] },
      { model: Tag, attributes: ['id', 'name'] }
    ]
  });
  res.json(stores);
});

router.get('/:id', async (req, res) => {
  const store = await Store.findByPk(req.params.id, {
    include: [Item, Tag]
  });
  res.json(store);
});

router.post('/', async (req, res) => {
  const store = await Store.create(req.body);
  res.status(201).json(store);
});

router.put('/:id', async (req, res) => {
  await Store.update(req.body, { where: { id: req.params.id } });
  const updated = await Store.findByPk(req.params.id);
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Store.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Store deleted.' });
});

module.exports = router;

