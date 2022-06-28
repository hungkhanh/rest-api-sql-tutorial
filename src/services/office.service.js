const officeRepository = require('../repositories/office.repository');

/**
 * @param {number} page 
 * @param {number} size
 * @return {Office[]}
 * @description find office 
 */
const findAll = async (page, size) => {
  return await officeRepository.findAll(page, size);
}

module.exports = {
  findAll,

}