exports.up = async function (knex) {
    await knex.schema.createTable("episodes", (table) => {
        table.increments("id");
        table.integer("season");
        table.integer("episode");
        table.string("title");
        table.string("subtitle");
        table.string("desc");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("episodes");
};
