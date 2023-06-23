// "summary": "User registration",
// "parameters": [],
// "security": [{ "Bearer": [] }]


"RegistrationResponse": {
    "type": "object",

        "properties": {
        "user": {
            "type": "object",
                "properties": {
                "name": {
                    "type": "string",
                        "description": "User's name",
                    },
                "email": {
                    "type": "string",
                        "description": "User's email",
                            "format": "email"
                },
                "avatarURL": {
                    "type": "string",
                        "description": "User's avatar URL"
                }
            
            },

          
          
        },
        "example": [
            { "email": "1@gmail.com", "userId": "1" },
            { "email": "2@gmail.com", "userId": "2" }
        ]
    }
}

"example": {
            "user":
            { "name": "User",
             "email": "User@example.com",
              "avatarURL": "User's avatar URL" }
          
}
          

"errorBadRequesResponse": {
 "type": "object",
        "properties": {
        "status": {
            "type": "integer",
            "description": "Error status code",
            "example": "400"
        },
        "message": {
            "type": "string",
            "description": "Error message",
            "example": "Bad request"
          }
        }
          
}
       "401": {
            "description": "Email or password is wrong",
            "content": {}
          }