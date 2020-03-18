import {DefaultCrudRepository} from '@loopback/repository';
import {Todo, TodoRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Todo, dataSource);
  }
}
