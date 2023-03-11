import User from "../database/models/user.js";
import BaseRepository from "./base-repository.js";

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    async getUserByUsername(username) {
        return await this.getFirst({ username });
    }

    async getUserByEmail(email) {
        return await this.getFirst({ email });
    }
}

export default UserRepository;