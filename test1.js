{
  "openapi": "3.0.1",
  "info": {
    "version": "2.0.2",
    "title": "Swagger test",
    "description": "Showing off swagger-ui-express",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "servers": [{ "url": "http://localhost:3000" }],
  "tags": [
    {
      "name": "Auth",
      "description": "Authorization endpoints"
    }
  ],
  "paths": {
    "/auth/register": {
      "post": {
        "tags": ["Auth"],
        "summary": "User registration",
        "parameters": [],
        "security": [{ "Bearer": [] }],
        "requestBody": {
          "description": "Registration's object",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RegistrationRequest"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RegistrationResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad request (invalid request body)",
            "content": {}
          },
          "409": {
            "description": "Provided email already exists",
            "content": {}
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "RegistrationRequest": {
        "type": "object",
        "required": ["email", "password"],
        "properties": {
          "email": {
            "type": "string",
            "description": "User's email",
            "format": "email"
          },
          "password": {
            "type": "string",
            "description": "User's password",
            "example": "qwerty123"
          }
        }
      },
      "RegistrationResponse": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "User's email",
              "format": "email"
            },
            "userId": {
              "type": "number",
              "description": "User's id",
              "example": "32143232436545474"
            }
          }
        },
        "example": [
          { "email": "1@gmail.com", "userId": "1" },
          { "email": "2@gmail.com", "userId": "2" }
        ]
      }
    },
    "securitySchemes": {
      "Bearer": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  }
}