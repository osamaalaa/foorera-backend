

module.exports = {
  up(queryInterface, Sequelize) {
    // Insert seed function here
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RideAlerts', null, {});
  },
};
