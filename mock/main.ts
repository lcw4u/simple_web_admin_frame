import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/api/auth/login",
        method: "post",
        response: ({ body }) => {
            return {
                "code": 200,
                "data": {
                    "token": "token.token",
                    "expire": Date.parse(new Date().toString()) / 1000 + 3600,
                },
            }
        }
    },
    {
        url: "/api/auth/logout",
        method:"post",
        response:({body}) => {
            return {
                "code": 200,
                "data": "ok",
            }
        }
    },
    {
        url: "/api/auth/check",
        method:"post",
        // timeout: 2500,
        response:({body}) => {
            return {
                "code": 200,
                "data": {
                    "token": "to",
                    "expire": Date.parse(new Date().toString()) / 1000 + 3600,
                },
            }
        }
    },
] as MockMethod[];