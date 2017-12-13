const appData = require('../mock/data.json')
const apiPath = require('../src/service/apiPath')
const tableData = appData.tableData
const menuData = appData.menuData
module.exports = (app) => {
	app.get(apiPath.tableApi, (req, res) => {
      res.json({
        errno: 0,
        data: tableData
      })
    }),
    app.post(apiPath.getMenuList, (req, res) => {
      res.json({
        errno: 0,
        data: menuData
      })
    })
}
