export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  },
  address?: {
    street?: string; // required
    postcode?: string;
  }
}