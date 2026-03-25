import { loadEnvFile } from 'node:process';
loadEnvFile();

export default {
  port: process.env.PORT || 3000,
};