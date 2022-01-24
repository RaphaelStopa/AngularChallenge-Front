import { politicalParty } from './politicalParty.model';
export class ResponsePageablePoliticalParty {
  content: politicalParty[];
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
