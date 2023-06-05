import { z } from 'zod';

import {
  type MutationErrorPartsFragment,
  MutationErrorType,
  MutationFieldErrorType,
} from './graphql/types';

export const PlainGraphQLError = z.object({
  message: z.string(),
  locations: z.array(z.object({ line: z.number(), column: z.number() })),
  path: z.array(z.union([z.string(), z.number()])),
  extensions: z.object({ code: z.string() }),
});
export type PlainGraphQLError = z.infer<typeof PlainGraphQLError>;

export const PlainGraphQLResponse = z.object({
  data: z.unknown(),
  errors: z.array(PlainGraphQLError).optional(),
});
export type PlainGraphQLResponse = z.infer<typeof PlainGraphQLResponse>;

export function isPlainGraphQLResponse(x: unknown): x is PlainGraphQLResponse {
  return PlainGraphQLResponse.safeParse(x).success;
}

const PlainMutationResponse = z.record(
  z.string(),
  z.object({
    error: z.object({
      __typename: z.literal('MutationError'),
      message: z.string(),
      type: z.nativeEnum(MutationErrorType),
      code: z.string(),
      fields: z.array(
        z.object({
          field: z.string(),
          message: z.string(),
          type: z.nativeEnum(MutationFieldErrorType),
        })
      ),
    }),
  })
);
type PlainMutationResponse = z.infer<typeof PlainMutationResponse>;

function isPlainMutationResponse(x: unknown): x is PlainMutationResponse {
  return PlainMutationResponse.safeParse(x).success;
}

export function getMutationErrorFromResponse(res: unknown): MutationErrorPartsFragment | null {
  if (!isPlainMutationResponse(res)) {
    return null;
  }

  const keys = Object.keys(res);
  return res[keys[0]].error;
}
