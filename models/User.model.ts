import User from './interfaces/User';
import users from './user';
import { appLogger } from '../utils/logger';

export default class UserModel {
    getUsers(params): Array<object> {
        return users.findAll({
            where: { ...params },
        });
    }

    getUser(id: string): Array<object> {
        return users.findAll({
            where: { id: id },
        });
    }

    newUser(user: User): Array<object> {
        return users.create({ ...user });
    }

    updateUser(id: string, user: User): Array<object> {
        appLogger.debug(`Updating user: ${id} with data: ${user}`);
        return users.update(
            {
                id: id,
                updatedAt: Date.now(),
                ...user,
            },
            {
                where: { id: id },
            },
        );
    }

    removeUser(id: string): Array<object> {
        return users.destroy({
            where: { id: id },
        });
    }
}
