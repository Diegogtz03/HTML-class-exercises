import type { Config } from "drizzle-kit"
export default {
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
} as Config
