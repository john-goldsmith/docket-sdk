# @docket/docket-sdk

@DocketDocketSdk - JavaScript client for @docket/docket-sdk
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @docket/docket-sdk --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var @DocketDocketSdk = require('@docket/docket-sdk');

var api = new @DocketDocketSdk.AuthApi()

var authPostRequestBody = new @DocketDocketSdk.AuthPostRequestBody(); // {AuthPostRequestBody} 

api.auth(authPostRequestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*@DocketDocketSdk.AuthApi* | [**auth**](docs/AuthApi.md#auth) | **POST** /auth | Issues a JWT
*@DocketDocketSdk.DocumentationApi* | [**getDocs**](docs/DocumentationApi.md#getDocs) | **GET** /docs | Returns an OpenAPI 3.0 spec.
*@DocketDocketSdk.GoogleApi* | [**getGoogleAuthTokens**](docs/GoogleApi.md#getGoogleAuthTokens) | **GET** /google/tokens | Get Google OAuth tokens
*@DocketDocketSdk.GoogleApi* | [**getGoogleAuthUrl**](docs/GoogleApi.md#getGoogleAuthUrl) | **GET** /google/url | Get Google OAuth URL
*@DocketDocketSdk.MeApi* | [**createMyEvent**](docs/MeApi.md#createMyEvent) | **POST** /me/events | Creates a new event for the current user
*@DocketDocketSdk.MeApi* | [**deleteMe**](docs/MeApi.md#deleteMe) | **DELETE** /me | Deletes the current user
*@DocketDocketSdk.MeApi* | [**deleteMyEventById**](docs/MeApi.md#deleteMyEventById) | **DELETE** /me/events/{id} | Deletes an event for the current user
*@DocketDocketSdk.MeApi* | [**getMe**](docs/MeApi.md#getMe) | **GET** /me | Fetches the current user
*@DocketDocketSdk.MeApi* | [**getMyEventById**](docs/MeApi.md#getMyEventById) | **GET** /me/events/{id} | Fetches a specific event for the current user
*@DocketDocketSdk.MeApi* | [**getMyEvents**](docs/MeApi.md#getMyEvents) | **GET** /me/events | Fetches all events for the current user
*@DocketDocketSdk.MeApi* | [**updateMe**](docs/MeApi.md#updateMe) | **PUT** /me | Updates the current user
*@DocketDocketSdk.MeApi* | [**updateMyEventById**](docs/MeApi.md#updateMyEventById) | **PUT** /me/events/{id} | Updates an event for the current user
*@DocketDocketSdk.StatusApi* | [**getHealthCheck**](docs/StatusApi.md#getHealthCheck) | **GET** /health-check | Health check
*@DocketDocketSdk.UserApi* | [**confirmUser**](docs/UserApi.md#confirmUser) | **GET** /users/confirm/{code} | Confirms user&#39;s registration
*@DocketDocketSdk.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /users | Create a user
*@DocketDocketSdk.UserApi* | [**forgotPassword**](docs/UserApi.md#forgotPassword) | **POST** /users/forgot-password | Forgot password
*@DocketDocketSdk.UserApi* | [**resetPassword**](docs/UserApi.md#resetPassword) | **POST** /users/reset-password | Reset password


## Documentation for Models

 - [@DocketDocketSdk.AuthPostRequestBody](docs/AuthPostRequestBody.md)
 - [@DocketDocketSdk.Error](docs/Error.md)
 - [@DocketDocketSdk.Event](docs/Event.md)
 - [@DocketDocketSdk.ForgotPasswordPostRequestBody](docs/ForgotPasswordPostRequestBody.md)
 - [@DocketDocketSdk.InlineResponse200](docs/InlineResponse200.md)
 - [@DocketDocketSdk.InlineResponse2001](docs/InlineResponse2001.md)
 - [@DocketDocketSdk.InlineResponse2002](docs/InlineResponse2002.md)
 - [@DocketDocketSdk.InlineResponse2003](docs/InlineResponse2003.md)
 - [@DocketDocketSdk.MeEventPutRequestBody](docs/MeEventPutRequestBody.md)
 - [@DocketDocketSdk.MeEventsPostRequestBody](docs/MeEventsPostRequestBody.md)
 - [@DocketDocketSdk.MePutRequestBody](docs/MePutRequestBody.md)
 - [@DocketDocketSdk.ResetPasswordPostRequestBody](docs/ResetPasswordPostRequestBody.md)
 - [@DocketDocketSdk.User](docs/User.md)
 - [@DocketDocketSdk.UsersPostRequestBody](docs/UsersPostRequestBody.md)


## Documentation for Authorization


### bearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

