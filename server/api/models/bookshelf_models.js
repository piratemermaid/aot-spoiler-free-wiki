const { bookshelf } = require("./config");

const Info = bookshelf.model("Info", {
    tableName: "info"
});

module.exports = { Info };
