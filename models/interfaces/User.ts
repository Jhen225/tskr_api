import Address from './Address';
import Role from './Role';
import Category from './Category';

export default interface User {
    id: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    username: string;
    password?: string;
    categoryId: string;
    category: Category;
    addressId?: string;
    address?: Address;
    phonenumber?: string;
    birthday?: Date;
    roleId?: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
}
