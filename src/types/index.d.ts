interface ApiSuccess {
  type: 'success';
  message?: string;
  data?: unknown;
}

interface ApiError {
  type: 'error';
  message: string;
  data?: unknown;
}

type ApiResponse = ApiError | ApiSuccess;
