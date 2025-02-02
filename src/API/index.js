export async function fetchPlayers() {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-web-pt/players`);
  return await response.json();
}
export async function fetchSinglePlayer(playerId) {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-web-pt/players/${playerId}`);
  return await response.json();
}
export async function postNewPlayer(playerDetails) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-web-pt/players/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerDetails),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export async function deletePlayer(playerId) {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-web-pt/players/${playerId}`, {
  method: 'DELETE',
});
}

// put in try / catch for 1 and 5