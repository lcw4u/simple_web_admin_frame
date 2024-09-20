import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {viteMockServe} from "vite-plugin-mock"
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins:[
      vue(),
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
        prodEnabled: command !== "serve" ,
        logger: false
      })
    ],
    server: {
      host: "0.0.0.0",
      port: 10011,
    }
  }
}

