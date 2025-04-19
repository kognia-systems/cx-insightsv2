import { CriteriaModel } from '@criterias/criteria-model';

export class BlueprintModel {
  constructor(
    public id: string,
    public name: string,
    public typification: string,
    public vocabulary: string,
    public enable: boolean,
    public data: CriteriaModel[],
    public business_id: string,
    public segment_id: string,
    public process_id: string,
    public modification_date: string,

    public context?: string,
    public process?: string,
    public topics?: string[]
  ) {}
}
