
#!/bin/bash

# Download the JSON schema
curl https://core-api.uk.plain.com/webhooks/schema.json -o ./webhook-schema.json

./node_modules/.bin/json2ts --input webhook-schema.json --output webhook-schema.ts
