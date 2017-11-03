const path = require('path');

module.exports = siteController;

function siteController() {

    return {
        getSite: getSite,
        getAdminSite: getAdminSite
    }

    function getSite(req, res) {
        res.sendFile('public/index.html', {
            root: path.join(__dirname, '../..')
        });
    };

    function getAdminSite(req, res) {
        res.sendFile('admin/index.html', {
            root: path.join(__dirname, '../..')
        })
    }
}