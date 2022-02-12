import Entity from '../../domain/entity';


export default interface EntityFactory<E extends Entity, S extends any> {

    mapToEntity(schema: S): E;

    mapToSchema(entity: E): S;
}
