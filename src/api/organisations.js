import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/organisations"
      : "http://localhost:3000/api/organisations"
});

export function getOrganisations() {
  return service.get("/").then(res => res.data);
}
export function getOrganisation(id) {
  return service.get(id).then(res => res.data);
}
export function removeOrganisation(id) {
  return service.delete(id).then(() => {});
}
export function getOrganisationsByOwner(id) {
  return service
    .get("/", {
      params: {
        ownerId: id
      }
    })
    .then(res => res.data);
}
export function addNewOrganisation(organisation) {
  const formData = new FormData();
  // you can add more information to the formdata
  Object.keys(organisation).forEach(key => {
    formData.append(key, organisation[key]);
  });

  return service
    .post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => res.data);
}
export function editOrganisation(id, organisationChanges) {
  return service.patch(id, organisationChanges).then(res => res.data);
}
