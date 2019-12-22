import role from './role';
import Role from './interfaces/Role';
export default class RoleModel {
    getRoles(params): Array<object> {
        return role.findAll({
            where: { ...params },
        });
    }

    getRole(params): Array<object> {
        return role.findAll({
            where: { ...params },
        });
    }

    newRole(newRole: Role): Array<object> {
        return role.create({ ...newRole });
    }

    updateRole(id: string, update: Role): Array<object> {
        return role.update(
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

    removeRole(id: string): Array<object> {
        return role.destroy({
            where: { id: id },
        });
    }
}
