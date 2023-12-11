const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
        code: 1,
        mas: 'hello world'
    };
  }
}

module.exports = UserController;
