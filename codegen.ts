import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://core-api.uk.plain.com/graphql/v1/schema.graphql',
  documents: './src/graphql/*/*.gql',
  config: {
    avoidOptionals: true,
  },
  generates: {
    './src/graphql/types.ts': {
      plugins: [
        {
          add: {
            content: '/* THIS FILE IS GENERATED */',
          },
        },
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
    },
  },
};

export default config;
