import { startBot } from "./bot/index.js";
import { deployCommands } from "./bot/deploy.js";
import { logger } from "./lib/logger.js";

deployCommands()
  .then(() => startBot())
  .catch((err) => {
    logger.error({ err }, "Failed to start Discord bot");
    process.exit(1);
  });
