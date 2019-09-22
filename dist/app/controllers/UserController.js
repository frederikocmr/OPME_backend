"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _parselinks = require('parse-links'); var _parselinks2 = _interopRequireDefault(_parselinks);

module.exports = {
  async index(req, res) {
    const { since } = req.query;

    if (!since) {
      return res
        .status(400)
        .json({ error: 'Parâmetros inválidos na requisição!' });
    }

    try {
      const { data, headers } = await _axios2.default.get(
        `https://api.github.com/users?since=${since}`
      );

      const users = data.map(user => ({
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
      }));

      const { next } = _parselinks2.default.call(void 0, headers.link);

      const response = {
        next,
        users,
      };

      return res.json(response);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Erro ao consultar API do Github!' });
    }
  },
};
