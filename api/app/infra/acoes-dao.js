const acoesConverter = (row) => ({
  id: row.acoes_id,
  codigo: row.acoes_codigo,
  descricao: row.acoes_descricao,
  preco: parseFloat((Math.random() * (100 - 1) + 1).toFixed(2)),
});

class AcoesDao {
  constructor(db) {
    this._db = db;
  }

  add(codigo, descricao, preco) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
                INSERT INTO acoes (
                    acoes_codigo, 
                    acoes_descricao,
                    acoes_preco
                    ) values (?,?,?)
                `,
        [codigo, descricao, preco],
        function (err) {
          if (err) {
            console.log(err);
            return reject("Can`t add acoes");
          }
          resolve(this.lastID);
        }
      );
    });
  }

  listAll(value) {
    return new Promise((resolve, reject) => {
      this._db.all(
        `
              SELECT 
                    acoes_id,acoes_codigo,acoes_descricao,acoes_preco
                FROM acoes
                WHERE acoes_codigo LIKE $codigo
			UNION 
			  SELECT 
                    acoes_id,acoes_codigo,acoes_descricao,acoes_preco
                FROM acoes
                WHERE acoes_descricao LIKE $codigo
                `,
        { $codigo: `%${value}%` },
        (err, rows) => {
          if (err) {
            console.log("++++ERRO+++");
            console.log(err);
            return reject("Can`t load acoes");
          }
          const acoes = rows.map(acoesConverter);
          return resolve(acoes);
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this._db.get(
        `
              SELECT 
                    acoes_id,acoes_codigo,acoes_descricao,acoes_preco
                FROM acoes
                WHERE acoes_id = ?
                `,
        [id],
        (err, row) => {
          console.log(row);
          if (err) {
            console.log(err);
            return reject("Can`t load acoes");
          }
          return resolve(acoesConverter(row));
        }
      );
    });
  }
}

module.exports = AcoesDao;
