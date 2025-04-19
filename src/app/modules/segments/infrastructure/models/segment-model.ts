export class SegmentModel {
  constructor(
    public id: string,
    public name: string,
    public enable: boolean,
    public modification_date: string,
    public process_id: string,
    public business_id: string
  ) {}
}
