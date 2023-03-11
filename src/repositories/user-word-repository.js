import UserWord from "../database/models/user-word.js";
import BaseRepository from "./base-repository.js";

class UserWordRepository extends BaseRepository {
    constructor() {
        super(UserWord);
    }

    async getWord(userId) {
        return await this.getFirst({ user_id: userId });
    }

    async setWord(userId, password, transaction) {
        return await this.insert({ 
            user_id: userId,
            password: password
        }, transaction);
    }
}

export default UserWordRepository;