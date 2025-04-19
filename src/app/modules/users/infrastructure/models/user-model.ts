export class UserModel {
  constructor(
    public email: string,
    public first_name: string,
    public last_name: string,
    public customer: string,
    public customer_id: string,
    public nit: string,
    public role: string,
    public address: string,
    public enabled: boolean,
    public phone: string,
    public business: string[] = [],
    public uid?: string,
    public photo?: string,
  ) {}
}
