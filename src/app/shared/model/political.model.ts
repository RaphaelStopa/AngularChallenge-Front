import { PoliticalParty } from './politicalParty.model';
export class Political {
  id: number;
  name: string;
  cpf: string;
  electivePositionType: string;
  politicalParty: PoliticalParty;
}
