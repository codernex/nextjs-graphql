import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

interface Env {
  NODE_ENV?: string;
  PORT?: number;
  JWT_SECRET?: string;
  DB_NAME?: string;
  DB_HOST?: string;
  DB_USER?: string;
  DB_PORT?: number;
  DB_PASS?: string;
}

type Config = {
  [T in keyof Env]-?: T extends "NODE_ENV"
    ? "development" | "production"
    : Env[T];
};

// Loading process.env as ENV interface

const getConfig = (): Env => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.API_PORT ? Number(process.env.API_PORT) : undefined,
    JWT_SECRET: process.env.JWT_SECRET,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    DB_PASS: process.env.DB_PASS,
    DB_USER: process.env.DB_USER,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitizedConfig = (config: Env): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
