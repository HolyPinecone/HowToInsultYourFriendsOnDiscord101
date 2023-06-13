class BaseCommand {
    get definition() {
        throw new Error(`${this.constructor.name} needs a definition() method`);
    }

    execute() {
        throw new Error(`${this.constructor.name} needs a execution() method`);
    }
}

module.exports = BaseCommand;