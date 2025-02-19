export type StatusCodeNumbers =
  | 200
  | 201
  | 204
  | 403
  | 401
  | 404
  | 500
  | 422
  | 400
  | 418;

export const STATUS_CODE: Record<string, StatusCodeNumbers> = {
  OK: 200,
  CREATED: 201,
  DELETED: 204,
  NO_CONTENT: 204,
  UNAUTHORIZED: 403,
  UNAUTHENTICATED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  INVALID_DATA_OR_STATE: 422,
  BAD_REQUEST: 400,
  INVALID_DATA_OR_STATE_BUT_ENABLE_COMMIT: 422,
  NON_CRITICAL_EXTERNAL_API_ERROR: 418,
};

export const TRANSACTION_SUCCESS_STATUS_CODE: number[] = [
  STATUS_CODE.OK,
  STATUS_CODE.CREATED,
  STATUS_CODE.DELETED,
];
