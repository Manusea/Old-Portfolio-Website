import portfolioApi from "./portfolioApi";

const getAll = () => {
    return portfolioApi.get("/contacts");
  };
  
  const get = (id) => {
    return portfolioApi.get(`/contacts/${id}`);
  };
  
  const create = (data) => {
    return portfolioApi.post("/contacts", data);
  };
  
  const update = (id, data) => {
    return portfolioApi.put(`/contacts/${id}`, data);
  };
  
  const remove = (id) => {
    return portfolioApi.delete(`/contacts/${id}`);
  };
  
  const contactService = {
    getAll,
    get,
    create,
    update,
    remove
  };
  
  export default contactService;
  