import { z } from 'zod';

import {
  type MutationErrorPartsFragment,
  MutationErrorType,
  MutationFieldErrorType,
} from './graphql/types';

export const PlainGraphQLError = z.object({
  message: z.string(),
  locations: z.array(z.object({ line: z.number(), column: z.number() })),
  path: z.array(z.union([z.string(), z.number()])).optional(),
  extensions: z.object({ code: z.string() }),
});
export type PlainGraphQLError = z.infer<typeof PlainGraphQLError>;

const PlainSuccessfulGraphQLResponse = z.object({
  data: z.unknown(),
});

export function isPlainSuccessfulGraphQLResponse(
  x: unknown
): x is z.infer<typeof PlainSuccessfulGraphQLResponse> {
  return PlainSuccessfulGraphQLResponse.safeParse(x).success;
}

const PlainFailedGraphQLResponse = z.object({
  errors: z.array(PlainGraphQLError),
});

export function isPlainFailedGraphQLResponse(
  x: unknown
): x is z.infer<typeof PlainFailedGraphQLResponse> {
  return PlainFailedGraphQLResponse.safeParse(x).success;
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

function isPlainMutationResponse(x: unknown): x is z.infer<typeof PlainMutationResponse> {
  return PlainMutationResponse.safeParse(x).success;
}

export function getMutationErrorFromResponse(res: unknown): MutationErrorPartsFragment | null {
  if (!isPlainMutationResponse(res)) {
    return null;
  }

  const keys = Object.keys(res);
  return res[keys[0]].error;
}
