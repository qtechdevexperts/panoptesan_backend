import bcrypt from "bcryptjs";

const hashPasswordLength = 10;

const setTimeoutPromise = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const hashPassword = (password) => {
    return bcrypt.hashSync(password, hashPasswordLength);
}

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

export default {
    setTimeoutPromise,
    hashPassword,
    comparePassword
}