const del = require('del');

function defaultTask(cb) {
    del('dist/**/*', { force: true }).then(() => {
        console.log('dist folder deleted for new build.');
        cb();
    });
}
  
exports.default = defaultTask