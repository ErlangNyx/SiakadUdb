var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const kurikulum = koneksi.define('kurikulum', {
    id_kurikulum: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    nama_kurikulum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kode_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_semester: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    jumlah_sks_lulus: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    jumlah_sks_wajib: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    jumlah_sks_pilihan: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    id_neofeeder: {
        type: Sequelize.STRING,
        allowNull: false,

    },

}, {
    freezeTableName: true
});
module.exports = kurikulum;