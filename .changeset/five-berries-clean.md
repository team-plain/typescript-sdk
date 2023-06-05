---
'@team-plain/typescript-sdk': major
---

Changed return type of upsert customer to include the upsert 'result' (e.g. if it the customer was created, updated or not modified). This means that the if you were previously accessing a property of the customer's such as id by doing: `result.id` you now have to change that to be `result.customer.id`.
