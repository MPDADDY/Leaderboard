const initializeGameId = async (baseUrl, gameName) => {
  const gameId = localStorage.getItem(gameName);
  if (!gameId) {
    try {
      const newGameId = await createGame(baseUrl, gameName);
      localStorage.setItem(gameName, newGameId);
      return newGameId;
    } catch (error) {
      return Promise.reject(error);
    }
  } else {
    return gameId;
  }
};

const createGame = async (baseUrl, name) => {
  const url = `${ baseUrl }games/`;
  const requestData = {name};
  const response = await makeRequest(url, 'POST', requestData);
  return response.result;
};

const addScore = async (baseUrl, gameId, user, score) => {
  const url = `${ baseUrl }games/${ gameId }/scores/`;
  const requestData = {user, score};
  const response = await makeRequest(url, 'POST', requestData);
  return response.result;
};

const getScores = async (baseUrl, gameId) => {
  if (!gameId) return [];
  const url = `${ baseUrl }games/${ gameId }/scores/`;
  const response = await makeRequest(url);
  return response.result;
};

const makeRequest = async (url, method = 'GET', requestData = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    method,
    headers,
  };

  if (requestData) {
    options.body = JSON.stringify(requestData);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

// Export functions
export {
  initializeGameId,
  createGame,
  addScore,
  getScores,
};
