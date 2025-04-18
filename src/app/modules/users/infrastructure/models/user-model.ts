export class UserModel {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public customer: string,
    public customerId: string,
    public nit: string,
    public role: string,
    public address: string,
    public enabled: boolean,
    public phone: string,
    public business: string[] = [],
    public uid?: string,
    public photo?: string,
  ) {}

  static fromJson(json: any): UserModel {
    return new UserModel(
      json.uid,
      json.email,
      json.first_name,
      json.last_name,
      json.customer,
      json.customer_id,
      json.nit,
      json.role,
      json.address,
      json.enabled,
      json.phone,
      json.photo,
      json.business
    );
  }

  toJson(): any {
    return {
      uid: this.uid,
      email: this.email,
      first_name: this.firstName,
      last_name: this.lastName,
      customer: this.customer,
      customer_id: this.customerId,
      nit: this.nit,
      role: this.role,
      address: this.address,
      enabled: this.enabled,
      phone: this.phone,
      photo: this.photo,
      business: this.business,
    };
  }
}
