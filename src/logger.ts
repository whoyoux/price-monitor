// deno-lint-ignore-file no-inferrable-types
export class Logger {
    private prefix: string = "[LOGGER]";

    constructor(prefix?: string) {
        if (prefix) this.prefix = prefix;
    }

    public log(message: string) {
        console.log(`${this.prefix} ${message}`);
    }

    public error(message: string) {
        console.error(`❌ ${this.prefix} ${message}`);
    }
}
