import setup from "../database/setup.js";

class BaseRepository {

    constructor(model) {
        this.Model = model;
    }

    async transaction() {
        return await setup.transaction();
    }

    async commit(transaction) {
        await setup.commit(transaction);
    }

    async rollback(transaction) {
        await setup.rollback(transaction);
    }

    async getFirst(filter) {
        if (!filter) { filter = {} };

        return await this.Model.findOne({
            where: filter,
        });
    }

    async insert(record, transaction) {
        if (!transaction) {
            return await this.Model.create(record);
        }

        return await this.Model.create(record, { transaction });
    }

}

export default BaseRepository;