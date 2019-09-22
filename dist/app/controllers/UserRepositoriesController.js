"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

module.exports = {
  async index(req, res) {
    const { username } = req.params;

    if (!username) {
      return res
        .status(400)
        .json({ error: 'O parâmetro de usuário é obrigatório!' });
    }

    try {
      const { data } = await _axios2.default.get(
        `https://api.github.com/users/${username}/repos`
      );

      const response = data.map(repo => ({
        id: repo.id,
        name: repo.name,
        url: repo.url,
      }));

      return res.json(response);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Erro ao consultar API do Github!' });
    }
  },
};
