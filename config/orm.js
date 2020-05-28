const connection = require("./connection");

const orm = {
  selectAll: async (table) => {
    const queryString = `Select * FROM ??`;
    try {
      return await connection.query(queryString, [table]);
    } catch (err) {
      throw err;
    }
  },
  insertOne: async (table, column, value) => {
    const queryString = `INSERT INTO ?? (??) VALUES (?)`;
    try {
      return await connection.query(queryString, [table, column, value]);
    } catch (err) {
      throw err;
    }
  },
  updateOne: async (
    table,
    columnToUpdate,
    newColVal,
    ColumnSelection,
    selectionValue
  ) => {
    const queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
    try {
      return connection.query(queryString, [
        table,
        columnToUpdate,
        newColVal,
        ColumnSelection,
        selectionValue,
      ]);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = orm;
