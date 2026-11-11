#!/usr/bin/env bun

import { buildSite } from "./frontend/site_build";
import { startServer } from "./server";

await buildSite(true);
await startServer();
