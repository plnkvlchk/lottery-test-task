
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('games_players', function (table) {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary().unique();
        table.uuid('player_id').notNullable();
        table.uuid('game_id').notNullable();
        table.foreign('player_id').references('players.id');
        table.foreign('game_id').references('games.id');
        table.unique(['player_id', 'game_id']);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('games_players');
};
