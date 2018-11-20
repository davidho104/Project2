module.exports = function (sequelize, DataTypes) {
    const Burgerseq = sequelize.define("burgerseq", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            field: 'id',
        },
        burger_name: {
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: sequelize.literal('FALSE')
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
        {
            timestamps: true,

    });
    return Burgerseq;
};
