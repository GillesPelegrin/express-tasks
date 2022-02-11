import Entity from './entity';
import EntityFactory from './entity.factory';

export default abstract class BaseRepository<E extends Entity> {

    constructor(protected factory: EntityFactory<E, any>,
                protected model: any) {
    }

    async save(entity: E): Promise<E> {
        const newSchema = await this.model.create(this.factory.mapToSchema(entity));
        return this.factory.mapToSchema(newSchema);
    }

    getAll(): Promise<E[]> {
        return this.model.find().map((schemas: []) =>
            schemas.map(schema => this.factory.mapToEntity(schema)));
    }

    async update(entity: E): Promise<E> {
        const updatedSchema = await this.model.findOneAndUpdate({id: entity.id},
            this.factory.mapToSchema(entity), {new: true});
        return this.factory.mapToEntity(updatedSchema);
    }

    async delete(id: string): Promise<void> {
        const deleteSchema = await this.model.deleteOne({_id: id});
        return deleteSchema;
    }
}
