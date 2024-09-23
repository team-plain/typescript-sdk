import { type Mock, expect, vitest } from 'vitest';
import * as packageJson from '../../package.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeExpectFn(spy: Mock<any, any>) {
  return ({
    apiKey,
    responseBody,
    url = 'https://core-api.uk.plain.com/graphql/v1',
  }: {
    apiKey: string;
    responseBody: unknown;
    url?: string;
  }) => {
    const args = spy.mock.calls[0] as unknown[];

    const reqUrl = args[0];
    // NOTE: Not worth typing as this is a test helper
    const reqOptions = args[1] as { headers: unknown; method: string; body: string };

    expect(reqUrl).toEqual(url);
    expect(reqOptions.headers).toStrictEqual({
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'X-Plain-SDK-Version': packageJson.version,
    });
    expect(reqOptions.method).toStrictEqual('POST');

    // We can't assert the two values when they are both strings
    // as the order of the keys may not match, hence the parse here:
    expect(JSON.parse(reqOptions.body)).toStrictEqual(responseBody);
  };
}

export const testHelpers = {
  createFetch: ({
    responseStatus,
    responseBody,
    responseHeaders = {},
  }: {
    responseStatus: number;
    responseBody: unknown;
    responseHeaders?: HeadersInit;
  }) => {
    const fetchSpy = vitest.fn();

    fetchSpy.mockReturnValueOnce(
      Promise.resolve(
        new Response(JSON.stringify(responseBody), {
          status: responseStatus,
          headers: responseHeaders,
        })
      )
    );

    return { fetchSpy, expectRequest: makeExpectFn(fetchSpy) };
  },
};
