import { Injectable } from "@rxdi/core";
import { GraphQLObjectType } from "graphql";

@Injectable()
export class TypeService {
  private _registeredTypesMap: Map<string, GraphQLObjectType> = new Map();
  private _registeredTypes: GraphQLObjectType[] = [];

  get types() {
    return this._registeredTypes;
  }

  getType(type: GraphQLObjectType) {
    return this._registeredTypesMap.get(type.name);
  }

  private addType(type: GraphQLObjectType) {
    this._registeredTypesMap.set(type.name, type);
    this._registeredTypes.push(type);
  }

  addTypes(types: GraphQLObjectType[] = []) {
    types.forEach(type => this.addType(type));
  }

}
