import User from './interfaces/User';
import user from './user';

export default class UserModel {
    getUsers(params: object): Array<object> {
        return user.findAll({
            where: { ...params },
        });
    }

    getUser(id: string): Array<object> {
        return user.findAll({
            where: { id: id },
        });
    }

    newUser(newUser: User): Array<object> {
        return user.create({ ...newUser });
    }

    updateUser(id: string, update: User): Array<object> {
        return user.update(
            {
                id: id,
                updatedAt: Date.now(),
                ...update,
            },
            {
                where: { id: id },
            },
        );
    }

    removeUser(id: string): Array<object> {
        return user.destroy({
            where: { id: id },
        });
    }
}
