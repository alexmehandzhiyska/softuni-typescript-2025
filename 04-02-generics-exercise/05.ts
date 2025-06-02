enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>
    log(logLevel: T, message: string): void;
    getFormat(): V
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
    cachedLogs: Map<T, string[]> = new Map();
    private format: V;

    constructor(format: V) {
        this.format = format;
    }

    log(logLevel: T, message: string): void {
        const date = new Date().toISOString();

        const filledMessage = this.format.replace('%level', logLevel).replace('%date', date).replace('%text', message);
        console.log(filledMessage);

        const currentMessages = this.cachedLogs.get(logLevel);

        if (currentMessages) {
            currentMessages.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessages);
        } else {
            this.cachedLogs.set(logLevel, [filledMessage]);
        }
    }

    getFormat(): V {
        return this.format;
    }
}

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);
logger.log(LoggingLevel.Info, "Just a simple message.");
logger.log(LoggingLevel.Error, "A Problem happened.");
console.log('-----------')
// console.log(logger.getFormat());
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))

// let logger = new Logger<LoggingLevel, LoggingFormat>("%text"); //TS Error
// let wronglogger = new Logger<string, LoggingLevel>();          //TS Error
// logger.log("%s", "Running the debugger.");                     //TS Error
// logger.log({format: "Test %s"}, "Running the debugger.");      //TS Error
