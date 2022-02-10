import Entity from './entity';


export default interface EntityFactory<E extends Entity> {

    mapToEntity(schema: any): E;

    mapToSchema(entity: E): any;
}
