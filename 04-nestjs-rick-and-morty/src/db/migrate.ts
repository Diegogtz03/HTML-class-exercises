import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres"
import { migrate } from "drizzle-orm/vercel-postgres/migrator"
import { config } from "dotenv"
config({ path: ".env" })

const db = drizzle(sql)

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "src/drizzle" })
    console.log("Migration completed")
  } catch (error) {
    console.error("Error during migration:", error)
    process.exit(1)
  }
}

main()
