import category from './category';
import Category from './interfaces/Category';
export default class CategoryModel {
    getCategories(params): Array<object> {
        return category.findAll({
            where: { ...params },
        });
    }

    getCategory(params): Array<object> {
        return category.findAll({
            where: { ...params },
        });
    }

    newCategory(newCategory: Category): Array<object> {
        return category.create({ ...newCategory });
    }

    updateCategory(id: string, update: Category): Array<object> {
        return category.update(
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

    removeCategory(id: string): Array<object> {
        return category.destroy({
            where: { id: id },
        });
    }
}
