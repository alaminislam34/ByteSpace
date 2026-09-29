export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
