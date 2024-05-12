import axios from 'axios';
import React from 'react'

const axiosPublic = axios.create({
  baseURL: 'https://foodie-server-lnwg.onrender.com',

});

const useAxios = () => {
  return axiosPublic
}

export default useAxios