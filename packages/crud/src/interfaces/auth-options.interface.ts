import { SCondition } from '@sdgoij/nestjsx-crud-request/lib/types/request-query.types';
import { ObjectLiteral } from '@sdgoij/nestjsx-util';

export interface AuthGlobalOptions {
  property?: string;
}

export interface AuthOptions {
  property?: string;
  filter?: (req: any) => SCondition | void;
  or?: (req: any) => SCondition | void;
  persist?: (req: any) => ObjectLiteral;
}
