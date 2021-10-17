import axiosClient from "./axiosClient";

export const category = {
  film: 'film',
  person: 'person',
  location: 'location',
  specie: 'specie',
  vechile: 'vechile',
}

const ghibliApi = {
  getFilmList: () => {
    const url = 'films';
    return axiosClient.get(url)
  },

  getFilm: (id) => {
    const url = `films/${id}`;
    return axiosClient.get(url)
  },

  getWithLink(url) {
    return axiosClient.get(url);
  }
}

export default ghibliApi;
