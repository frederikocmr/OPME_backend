import axios from 'axios';
import parseLinks from 'parse-links';

module.exports = {
  async index(req, res) {
    const { since } = req.query;
    let apiResponse = null;

    try {
      apiResponse = await axios.get(
        `https://api.github.com/users?since=${since}`
      );
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Erro ao consultar API do Github!' });
    }

    const users = apiResponse.data.map(user => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
    }));

    const { next } = parseLinks(apiResponse.headers.link);

    const response = {
      next,
      users,
    };

    return res.json({ response });
  },
};
