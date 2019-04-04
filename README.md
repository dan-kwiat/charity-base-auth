# CharityBase Auth
Management of CharityBase API Keys

### Development

```bash
yarn dev
```

#### Dev Environment Variables
Expected environment variables are listed in `env` in [now.json](./now.json).  You may define them in a `.env` as follows:

```bash
# example .env file in charity-base-auth
CHARITY_BASE_DYNAMO_ACCESS_KEY_ID=example-key-id
CHARITY_BASE_DYNAMO_SECRET_ACCESS_KEY=example-secret-key
...
```

Note: these values will not override any environment variables already set e.g. in your `.bash_profile`.


### Deployment

```bash
yarn deploy:production
```

Note: this requires [Now](https://zeit.co/now) which can be installed globally with npm: `npm i -g now`

#### Prod Environment Variables

To ensure our sensitive environment variables are only accessible by the code, we store them as [Now secrets](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/).  This is achieved on the command line:

```bash
now secret add charity-base-dynamo-access-key-id example-key-id
now secret add charity-base-dynamo-secret-access-key example-secret-key
...
```

The environment variable names are mapped to the secret names in `env` in [now.json](./now.json).  Note the `@` prefixing each secret name.
