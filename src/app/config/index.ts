import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};

// 'use strict';
// var __importDefault =
//   (this && this.__importDefault) ||
//   function (mod) {
//     return mod && mod.__esModule ? mod : { default: mod };
//   };
// Object.defineProperty(exports, '__esModule', { value: true });
// const dotenv_1 = __importDefault(require('dotenv'));
// const path_1 = __importDefault(require('path'));
// dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
// //console.log(process.cwd())
// exports.default = {
//   port: process.env.PORT,
//   database_url: process.env.DATABASE_URL,
//   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
// };

//default_password: process.env.DEFAULT_PASS,
//
