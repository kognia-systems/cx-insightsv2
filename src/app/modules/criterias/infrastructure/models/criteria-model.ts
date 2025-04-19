export class CriteriaModel {
  constructor(
    public id: string,
    public criteria: string,
    public description: string,
    public classification: string,
    public active: boolean,
    public enable: boolean,
    public modification_date: string,
  ) {}
}
