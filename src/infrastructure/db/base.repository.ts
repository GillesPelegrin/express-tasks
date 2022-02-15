import Entity from '../../domain/entity';
import EntityFactory from './entity.factory';

export default abstract class BaseRepository<E extends Entity> {

    constructor(protected factory: EntityFactory<E, any>,
                protected model: any) {
    }

    async save(entity: E): Promise<E> {
        const newSchema = await this.model.create(this.factory.mapToSchema(entity));
        return this.factory.mapToEntity(newSchema);
    }

    getAll(): Promise<E[]> {
        return this.model.find().map((schemas: []) =>
            schemas.map(schema => this.factory.mapToEntity(schema)));
    }

    findBy(filter: any): Promise<E[]> {
        return this.model.find(filter).map((schemas: []) =>
            schemas.map(schema => this.factory.mapToEntity(schema)));
    }

    async update(entity: E): Promise<E> {
        const updatedSchema = await this.model.findOneAndUpdate({id: entity.id},
            this.factory.mapToSchema(entity), {new: true});
        return this.factory.mapToEntity(updatedSchema);
    }

    async delete(id: string): Promise<void> {
        return await this.model.deleteOne({_id: id});
    }
}
