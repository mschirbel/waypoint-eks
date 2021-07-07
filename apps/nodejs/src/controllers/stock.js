const db = require("../config/db");

exports.createStock = async (req, res) => {
  const { stock_name, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO stocks (stock_name, quantity, price) VALUES ($1, $2, $3)",
    [stock_name, quantity, price]
  );

  res.status(201).send({
    message: "Stock added successfully!",
    body: {
      stock: { stock_name, quantity, price }
    },
  });
};

exports.listAllStocks = async (req, res) => {
    const response = await db.query('SELECT * FROM stocks ORDER BY stock_name ASC');
    res.status(200).send(response.rows);
};

exports.findStocksById = async (req, res) => {
    const stockId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM stocks WHERE stock_id = $1', [stocksId]);
    res.status(200).send(response.rows);
}

exports.updateStockById = async (req, res) => {
    const stockId = parseInt(req.params.id);
    const { stock_name, quantity, price } = req.body;
  
    const response = await db.query(
      "UPDATE stocks SET stock_name = $1, quantity = $2, price = $3 WHERE stock_id = $4",
      [stock_name, quantity, price, stockId]
    );
  
    res.status(200).send({ message: "Stock Updated Successfully!" });
};

exports.deleteStockById = async (req, res) => {
    const stockId = parseInt(req.params.id);
    await db.query('DELETE FROM stocks WHERE stock_id = $1', [
      stockId
    ]);
  
    res.status(200).send({ message: 'Stock deleted successfully!', stockId });
};