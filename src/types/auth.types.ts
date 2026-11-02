export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  customer: Customer;
  token: string;
}

export interface Customer {
  id: string;
  fullname: string;
  birthdate: string;
  address: string;
  phoneNumber: string;
  role: string;
}
