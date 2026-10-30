export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  userRole: string;
}

export interface UserSearchParams {
  name?: string;
  username?: string;
  email?: string;
  role?: string;
  createdAt?: string;
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: string;
}
