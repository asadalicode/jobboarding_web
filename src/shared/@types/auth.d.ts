declare namespace IAuth {
  interface ILoginParams {
    email: string;
    password: string;
  }
  interface IBusinessRegisterParams {
    company_logo: string;
    company_name: string;
    contact_person: string;
    phone: string;
    email: string;
    password: string;
    address_street: string;
    suburb: string;
    state: string;
    postal_code: string;
  }
}
