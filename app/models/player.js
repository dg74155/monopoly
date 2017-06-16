module.exports = function(sequelize, DataTypes) {

    var Player = sequelize.define("Player", {
        uuid: {
            type: DataTypes.INTEGER,
            // defaultValue: DataTypes.UUIDV1,
            autoIncrement: true,
            primaryKey: true
        },
        player_name: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        piece: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        money: {
            type: DataTypes.INTEGER,
            notNull: true,
            allowNull: false
        },
        roll: {
            type: DataTypes.INTEGER,
            notNull: true,
            allowNull: false
        },
        current_space: {
            type: DataTypes.INTEGER,
            notNull: true,
            allowNull: false
        },
        properties: {
            type: DataTypes.STRING,
        },
        active_turn: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            notNull: true,
            allowNull: false
        },
        jail: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            notNull: true,
            allowNull: false
        },
        parent_user: {
            type: DataTypes.STRING,
        }
    }, {
        status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' }
    });
    return Player;
};


