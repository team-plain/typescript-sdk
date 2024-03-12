
#!/bin/bash

# Download the JSON schema
curl https://core-api.uk.plain.com/webhooks/schema.json -o ./src/webhooks/webhook-schema.json

./node_modules/.bin/json2ts --input ./src/webhooks/webhook-schema.json --output ./src/webhooks/webhook-schema.ts