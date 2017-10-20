
exports.up = function(knex, Promise) {
    return knex.schema
        .createTableIfNotExists('games', function(table) {
            table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary().unique();
            table.decimal('sum_to_enter', 10, 2).notNull();
            table.decimal('sum_collected', 10, 2).defaultTo(0);
            table.timestamp('finish_date').notNull();
            table.boolean('is_resolved').notNull().default(false);
            table.uuid('winner_id');
            table.foreign('winner_id').references('players.id')
        });
return Promise.resolve()
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('games');
};
