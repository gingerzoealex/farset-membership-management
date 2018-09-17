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

export function createMember({ name }) {
  return fetch(`${SERVICE_URL}/members`, {
    mode: 'cors',
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    body: JSON.stringify({
      name
    })
  }).then(
    (response) => response.json()
  );
}

export function updateMember(id, { name }) {
  return fetch(`${SERVICE_URL}/members/${id}`, {
    mode: 'cors',
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    body: JSON.stringify({
      name
    })
  }).then(
    (response) => response.json()
  );
}

export function deleteMember(id) {
  return fetch(`${SERVICE_URL}/members/${id}`, {
    mode: 'cors',
    method: 'delete',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
  });
}
