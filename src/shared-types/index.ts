export interface USER {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SUPPORT {
  url: string;
  text: string;
}

export interface API_RESPONSE {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: USER[];
  support: SUPPORT;
}

export interface STATE {
  users: USER[];
  isLoadButtonActive: boolean,
  support: SUPPORT;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
