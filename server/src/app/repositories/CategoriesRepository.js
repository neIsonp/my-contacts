const db = require('../../database/index');

class CategoriesRepository {
  async findAll() {
    const rows = await db.Query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async create({ name }) {
    const [row] = await db.Query('INSERT INTO categories(name) VALUES($1) RETURNING *', [name]);

    return row;
  }

  async delete({ id }) {
    await db.Query('DELETE FROM categories WHERE id = $1', [id]);
  }

  async update(id, { name }) {
    const [row] = await db.Query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *', [name, id]);

    return row;
  }

  async findById(id) {
    const [row] = await db.Query('SELECT * FROM categories WHERE id = $1', [id]);

    return row;
  }
}

module.exports = new CategoriesRepository();
