const officeRepository = require('../repositories/office.repository');

/**
 * 
 * @return {Office[]}
 * @description find all office 
 */
const findAll = async () => {
  return await officeRepository.findAll();
}

module.exports = {
  findAll,

}