export default class TikTokApi {
  constructor() {
    this._apiBase = "http://linuxtech.io:5000/search_user"
  }

  getUserPosts = async (e, username) => {
    e.preventDefault();

    const response = await fetch('http://linuxtech.io:5000/search_user', {
      method: "POST",
      headers: {
        'Accept': 'application/json, */*; q=0.01',
        'Content-type' : 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        username: username,
        post_numbers: 1
      })
    });
    
    if(!response.ok) {
      console.error(`Ошибка по адресу http://linuxtech.io:5000/search_user`)
    };

    return await response.json();
  }

  getUserInfo = async (e, username) => {
    e.preventDefault();

    const response = await fetch('http://linuxtech.io:5000/search_user', {
      method: "POST",
      headers: {
        'Accept': 'application/json, */*; q=0.01',
        'Content-type' : 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        username: username,
        post_numbers: 0
      })
    });
    
    if(!response.ok) {
      console.error(`Ошибка по адресу http://linuxtech.io:5000/search_user`)
    };

    return await response.json();
  }
}