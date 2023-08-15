export interface Entity {
  /** Unique ID for this entity. */
  id: string;
}

export interface HasNestedEntities<T> {
  /** Children for this entity, if any. */
  children?: T[];
}

export interface Creatable {
  /** The date this entity was added. */
  createdDate: Date;
}

export interface Deletable {
  /** The date this entity was marked as deleted. */
  deletedDate?: Date;
}
