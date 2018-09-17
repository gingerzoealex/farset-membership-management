const SERVICE_URL = 'http://127.0.0.1:3000';

export function getMembers() {
  return fetch(`${SERVICE_URL}/members`, {
    mode: 'cors',
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }).then(
    (response) => response.json()
  );
}
