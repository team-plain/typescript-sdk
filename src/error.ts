import type { PlainGraphQLError } from './graphql-utlities';
import type { MutationErrorPartsFragment } from './graphql/types';

/* 400 */
export type BadRequestError = {
  type: 'bad_request';
  message: string;
  graphqlErrors: PlainGraphQLError[];
  requestId?: string;
};

/* 401 */
export type ForbiddenError = {
  type: 'forbidden';
  message: string;
  requestId?: string;
};

/* 500 */
export type InternalServerError = {
  type: 'internal_server_error';
  message: string;
  requestId?: string;
};

/* Unhandled/unexpected errors */
export type UnknownError = {
  type: 'unknown';
  message: string;
  err?: unknown;
  requestId?: string;
};

/* Handled mutation errors */
export type MutationError = {
  type: 'mutation_error';
  message: string;
  errorDetails: MutationErrorPartsFragment;
  requestId?: string;
};

export type PlainSDKError =
  | ForbiddenError
  | BadRequestError
  | InternalServerError
  | MutationError
  | UnknownError;
