import { PlainGraphQLError } from './graphql-utlities';
import { MutationErrorPartsFragment } from './graphql/types';

/* 400 */
type BadRequestError = {
  code: 'bad_request';
  message: string;
  graphqlErrors: PlainGraphQLError[];
};

/* 401 */
type ForbiddenError = {
  code: 'forbidden';
  message: string;
};

/* 500 */
type InternalServerError = {
  code: 'internal_server_error';
  message: string;
};

/* Unhandled/unexpected errors */
type UnknownError = {
  code: 'unknown';
  message: string;
  err?: unknown;
};

/* Handled mutation errors */
type MutationError = {
  code: 'mutation_error';
  message: string;
  errorDetails: MutationErrorPartsFragment;
};

export type PlainSDKError =
  | ForbiddenError
  | BadRequestError
  | InternalServerError
  | MutationError
  | UnknownError;
