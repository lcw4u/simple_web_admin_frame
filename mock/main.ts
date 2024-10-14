import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/api/main/test",
        method: "post",
        response: ({ body }) => {
            return {
                "code": 200,
                "data": {
                    "message": "OK",
                },
            }
        }
    },

] as MockMethod[];