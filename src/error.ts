import { PlainGraphQLError } from './graphql-utlities';
import { MutationErrorPartsFragment } from './graphql/types';

/* 400 */
type BadRequestError = {
  type: 'bad_request';
  message: string;
  graphqlErrors: PlainGraphQLError[];
};

/* 401 */
type ForbiddenError = {
  type: 'forbidden';
  message: string;
};

/* 500 */
type InternalServerError = {
  type: 'internal_server_error';
  message: string;
};

/* Unhandled/unexpected errors */
type UnknownError = {
  type: 'unknown';
  message: string;
  err?: unknown;
};

/* Handled mutation errors */
type MutationError = {
  type: 'mutation_error';
  message: string;
  errorDetails: MutationErrorPartsFragment;
};

export type PlainSDKError =
  | ForbiddenError
  | BadRequestError
  | InternalServerError
  | MutationError
  | UnknownError;
