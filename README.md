# OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration
OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration. Sometimes you want to authorize servers to access data without interactively logging in each time the servers exchange information. This flow uses a certificate to sign the JWT request. However, this flow does require prior approval of the client app.
## Steps

Let’s go over each step of this authorization flow.

- Create a JWT
- Request Access Token
- Salesforce Grants Access Token
- Access Protected Data

## What to do next?
After retrieving the Access Token through Postman you can use it with any of the REST APIs of Salesforce.
For example: Create a Record
```curl https://MyDomainName.my.salesforce.com/services/data/v60.0/sobjects/Account/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@newaccount.json"```
