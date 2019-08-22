'use strict'
const host = "http://ec2-3-85-172-215.compute-1.amazonaws.com:8989";

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
