import { api } from './axios';

export async function fetchCampers(params) {
  const { data } = await api.get('/campers', { params });
  return data;
}

export async function fetchCamperById(id) {
  const { data } = await api.get(`/campers/${id}`);
  return data;
}
