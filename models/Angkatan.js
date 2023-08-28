var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Angkatan = koneksi.define('angkatan', {
    id_kurikulum: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
    },


}, {
    freezeTableName: true
});
module.exports = Angkatan;