//postgresql://neondb_owner:sMA9OGEiBF5u@ep-mute-sea-a1hjna97.ap-southeast-1.aws.neon.tech/Share%20A%20bite%20?sslmode=require

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon("postgresql://neondb_owner:sMA9OGEiBF5u@ep-mute-sea-a1hjna97.ap-southeast-1.aws.neon.tech/Share%20A%20bite%20?sslmode=require"
);

export const db = drizzle(sql, { schema });
