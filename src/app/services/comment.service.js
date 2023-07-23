import httpService from "./http.service";

const commentEndpoint = "comment/";

const commentService = {
  fetchAll: async () => {
    const { data } = await httpService.get(commentEndpoint);
    return data;
  }
};

export default commentService;
