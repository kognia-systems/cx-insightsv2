export interface User {
  uid?: string;
  email: string;
  first_name: string;
  last_name: string;
  customer: string;
  customer_id: string;
  nit: string;
  role: string;
  address: string;
  enabled: boolean;
  phone: string;
  photo?: string;
  business: string[];
}
