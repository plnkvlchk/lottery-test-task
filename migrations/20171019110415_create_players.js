
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('players', function(table) {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary().unique();
        table.decimal('balance', 10, 2).notNull().defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('players');
};
