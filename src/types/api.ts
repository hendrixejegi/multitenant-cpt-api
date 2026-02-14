export interface ApiSuccess {
  type: 'success';
  message?: string;
  data?: unknown;
}

export interface ApiError {
  type: 'error';
  message: string;
  data?: unknown;
}

export type ApiResponse = ApiError | ApiSuccess;
