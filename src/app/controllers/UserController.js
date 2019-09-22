import axios from 'axios';
import parseLinks from 'parse-links';

module.exports = {
  async index(req, res) {
    const { since } = req.query;

    if (!since) {
      return res
        .status(400)
        .json({ error: 'Parâmetros inválidos na requisição!' });
    }

    try {
      const { data, headers } = await axios.get(
        `https://api.github.com/users?since=${since}`
      );

      const users = data.map(user => ({
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
      }));

      const { next } = parseLinks(headers.link);

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
