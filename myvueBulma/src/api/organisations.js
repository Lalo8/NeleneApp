import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000/api/organisations',
});

export function getOrganisations() {
    return service.get('/').then(res => res.data)
}