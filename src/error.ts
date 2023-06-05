import type { MutationErrorPartsFragment } from './graphql/types';
import type { PlainGraphQLError } from './graphql-utlities';

/* 400 */
type BadRequestError = {
  type: 'bad_request';
  message: string;
  graphqlErrors: PlainGraphQLError[];
  requestId?: string;
};

/* 401 */
type ForbiddenError = {
  type: 'forbidden';
  message: string;
  requestId?: string;
};

/* 500 */
type InternalServerError = {
  type: 'internal_server_error';
  message: string;
  requestId?: string;
};

/* Unhandled/unexpected errors */
type UnknownError = {
  type: 'unknown';
  message: string;
  err?: unknown;
  requestId?: string;
};

/* Handled mutation errors */
type MutationError = {
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
