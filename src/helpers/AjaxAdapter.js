export default class AjaxAdapter {

  static createUser(newUser) {
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newUser)
    })
    .then(r=> r.json());
  }

}
