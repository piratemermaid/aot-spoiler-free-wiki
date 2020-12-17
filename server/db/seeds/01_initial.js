const episodes = require("../data/episodes");

exports.seed = async function (knex) {
    await resetTable(knex, "episodes");

    await knex("episodes").insert(episodes);
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};
