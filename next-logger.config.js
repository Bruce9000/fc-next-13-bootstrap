const pino = require("pino");
const ecsFormat = require("@elastic/ecs-pino-format");

// Logger to use before pino & ecs has been intialized to ensure all logs are output in ECS JSON format
const log = (message, level = "info") =>
    console.log(
        JSON.stringify({
            "log.level": level,
            "@timestamp": new Date().toISOString(),
            name: "next-logger-setup",
            message,
        })
    );

const getLogLevel = (configValue) => {
    if (!configValue) {
        return;
    }
    const logLevelTypes = ["info", "error", "fatal", "warn", "debug", "trace"];
    if (logLevelTypes.includes(configValue)) {
        return { level: configValue };
    } else {
        log(`${configValue} is not a valid value of ${logLevelTypes}`, "warn");
        return { level: "info" };
    }
};

const logger = (defaultConfig) => {
    const pinoConfig = {
        ...defaultConfig,
        ...getLogLevel(process.env.LOG_LEVEL),
        ...ecsFormat({ convertErr: false, convertReqRes: true }),
    };
    return pino(pinoConfig);
};

module.exports = {
    logger,
};
