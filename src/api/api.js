import { api } from './axios';

export async function getCampers(params) {
  const { data } = await api.get('/campers', { params });
  return data;
}

export async function getCamperById(id) {
  const { data } = await api.get(`/campers/${id}`);
  return data;
}
