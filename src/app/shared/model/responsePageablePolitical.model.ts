import { Political } from './political.model';
export class ResponsePageablePolitical {
  content: Political[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any[];
  size: number;
  sort: number;
  totalElements: number;
  totalPages: number;
}
