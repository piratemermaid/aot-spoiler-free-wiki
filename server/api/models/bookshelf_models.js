const { bookshelf } = require("./config");

const Episode = bookshelf.model("Episode", {
    tableName: "episodes"
});

module.exports = { Episode };
