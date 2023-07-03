const BaseModel = require("./base.model");

class PlayersModel extends BaseModel {
    async listProduct() {
        let sql = `SELECT * FROM product`;
        return await this.querySql(sql);
    }
    async addProduct(id,name,price,quantity){
        let sql = `INSERT INTO productVALUES
        ('${id}', ${name}, ${price}, ${quantity})'`;
        await this.querySql(sql)
    }
}

module.exports = new PlayersModel();