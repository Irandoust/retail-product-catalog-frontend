export interface ServiceResponse<T> {
  success: boolean;
  message: string;
  data: T;
  statusCode: number;
}

export interface PaginatedResult<T> {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  results: T[];
}
