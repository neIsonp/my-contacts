const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    const rows = await CategoriesRepository.findAll();

    res.json(rows);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: 'The name is required',
      });
    }

    const category = await CategoriesRepository.create({ name });

    res.json(category);
  }

  async delete(req, res) {
    const id = req.params;

    await CategoriesRepository.delete(id);

    res.sendStatus(200);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return res.status(404).json({ message: 'user not found' });
    }

    if (!name) {
      return res.status(400).json({
        message: 'The name is required',
      });
    }

    const updatedCategory = await CategoriesRepository.update(id, { name });

    res.status(200).json(updatedCategory);
  }
}

module.exports = new CategoryController();
