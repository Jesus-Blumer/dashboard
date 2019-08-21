"use strict";

const host = "http://192.168.1.90:8989/api/v2";

const Dashboard = async () => {
  try {
    const url = `${host}/dashboard/`;
    const response = await fetch(url);
    const data = await response.json();
      console.log('DATAAAA', data)
    return data;
  } catch (error) {
    return error
  }
};

export {Dashboard}