import messages from "../constants/messages.js";
import statusCodes from "../constants/status-codes.js";
import { Exception } from "../helpers/exception.js";
import UserRepository from "../repositories/user-repository.js";
import UserWordRepository from "../repositories/user-word-repository.js";
import helper from "../helpers/helper.js";
import BaseService from "./base-service.js";

class UserService extends BaseService {
    constructor(userRole) {
        super();
        this.UserRoleId = userRole;
        this.UserRepo = new UserRepository();
        this.UserWordRepo = new UserWordRepository();
    }

    async authenticate(email, username, password) {
        try {
            let user = await (email ? this.UserRepo.getUserByEmail(email) : this.UserRepo.getUserByUsername(username));

            if (user) {
                let word = null;
                
                try {
                    word = await this.UserWordRepo.getWord(user.dataValues.id);
                } catch (ex) {
                    console.log(ex, 'word exception');
                }

                if (word && helper.comparePassword(password, word.password)) {
                    return user;
                } else {
                    throw new Exception(statusCodes.UNAUTHORIZED, messages.INCORRECT_PASSWORD);
                }
            }

            throw new Exception(statusCodes.NOT_FOUND, messages.NO_USER_FOUND);
        } catch (ex) {
            this.throwEx(ex);
        }
    }

    async register(payload) {
        let transaction;
        
        try {
            transaction = await this.UserRepo.transaction();
            let { password, ..._user } = payload;

            let user = await this.UserRepo.insert(_user, transaction);

            if (!user) {
                throw new Exception(statusCodes.BAD_REQUEST, messages.FAILURE);
            }

            let userWord = await this.UserWordRepo.setWord(user.id, helper.hashPassword(password), transaction);

            if (!userWord) {
                throw new Exception(statusCodes.BAD_REQUEST, messages.FAILURE);
            }

            await this.UserRepo.commit(transaction);

            return user;

        } catch (ex) {
            await this.UserRepo.rollback(transaction);
            this.throwEx(ex);
        }
    }
}

export default UserService;