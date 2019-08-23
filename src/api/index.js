'use strict'
const host = process.env.REACT_APP_API_BLUMER

async function GetUsers() {
  try {
    const url = `${host}/api/v2/dashboard/`;
    const response = await fetch(url);
    const users = await response.json();
    const { count } = users.profiles;
    return count;
  } catch (error) {
    return error;
  }
}

async function GetGender() {
  try {
    const url = `${host}/api/v2/dashboard/`;
    const response = await fetch(url);
    const genere = await response.json();
    const { gender } = genere.profiles;
    return gender;
  } catch (error) {
    return error;
  }
}

export { GetUsers, GetGender };
