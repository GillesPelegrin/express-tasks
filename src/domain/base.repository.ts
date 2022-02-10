import Entity from './entity';
import EntityFactory from './entity.factory';

export default abstract class BaseRepository<E extends Entity> {

    constructor(protected factory: EntityFactory<E>,
                protected model: any) {
    }

    save(entity: E): Promise<void> {
        return this.model.create(this.factory.mapToSchema(entity));
    }

    getAll(): Promise<E[]> {
        return this.model.find().map((schemas: []) =>
            schemas.map(schema => this.factory.mapToEntity(schema)))
    }
}
