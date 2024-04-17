---
'@team-plain/typescript-sdk': major
---

Added the following queries:
- `getCustomerCustomerGroupMemberships`
- `getCustomerTenantMemberships`
- `getTenantById`
- `getTenants`
- `searchTenants`
- `getCompanies`
- `searchCompanies`
- `getTierById`
- `getTiers`


Added support for the following mutations:
- `upsertTenant`
- `setCustomerTenants`
- `addCustomerToTenants`
- `removeCustomerFromTenants`
- `updateCustomerCompany`
- `addMembersToTier`
- `removeMembersFromTier`

Breaking change:
- You previously received customer group memberships whenever you got a customer back. As there might be many customer groups this is now it's own separate query (`getCustomerCustomerGroupMemberships`). This allows you to fetch and paginate through a customer's customer groups.