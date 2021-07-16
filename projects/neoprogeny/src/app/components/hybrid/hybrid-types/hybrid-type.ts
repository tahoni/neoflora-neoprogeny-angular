import {HybridOffspringType} from './hybrid-offspring-type.enum';
import {HybridSeedType} from './hybrid-seed-type.enum';
import {HybridBaseType} from './hybrid-base-type';

export class HybridType extends HybridBaseType {
  mother: HybridBaseType;
  father: HybridBaseType;
  description: string;
  seed: HybridSeedType;
  offspring: HybridOffspringType;
  image: string;
  comment: string;
}
