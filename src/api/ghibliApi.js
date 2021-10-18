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
  getLocationList: () => {
    const url = 'locations';
    return axiosClient.get(url)
  },

  getLocation: (id) => {
    const url = `locations/${id}`;
    return axiosClient.get(url)
  },
  getPeopleList: () => {
    const url = 'people';
    return axiosClient.get(url)
  },

  getPerson: (id) => {
    const url = `people/${id}`;
    return axiosClient.get(url)
  },
  getSpecieList: () => {
    const url = 'species';
    return axiosClient.get(url)
  },

  getSpecie: (id) => {
    const url = `species/${id}`;
    return axiosClient.get(url)
  },
  getVehicleList: () => {
    const url = 'vehicles';
    return axiosClient.get(url)
  },

  getVehicle: (id) => {
    const url = `vehicles/${id}`;
    return axiosClient.get(url)
  },

  getWithLink(url) {
    return axiosClient.get(url);
  }
}

export default ghibliApi;
