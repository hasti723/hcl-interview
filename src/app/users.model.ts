export class User {
  id: number;
  email: string;
  first_name: string;
}

export class PageResult<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
  support: string;
}
