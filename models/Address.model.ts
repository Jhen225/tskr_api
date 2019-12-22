import address from './address';
import Address from './interfaces/Address';
export default class AddressModel {
    getAddresses(params): Array<object> {
        return address.findAll({
            where: { ...params },
        });
    }

    getAddress(params): Array<object> {
        return address.findAll({
            where: { ...params },
        });
    }

    newAddress(newAddress: Address): Array<object> {
        return address.create({ ...newAddress });
    }

    updateAddress(id: string, update: Address): Array<object> {
        return address.update(
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

    removeAddress(id: string): Array<object> {
        return address.destroy({
            where: { id: id },
        });
    }
}
