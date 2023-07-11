import httpService from "./http.service";

const productEndpoint = "product/";

const productService = {
  fetchAll: async () => {
    const { data } = await httpService.get(productEndpoint);
    return data;
  },
  create: async (payload, { showcaseId }) => {
    const { data } = await httpService.post(productEndpoint, payload, {
      params: { showcaseId }
    });
    return data;
  },
  update: async (payload, { showcaseId, productId }) => {
    const { data } = await httpService.patch(
      productEndpoint + productId,
      payload,
      { params: { showcaseId } }
    );
    return data;
  },
  remove: async (payload, { showcaseId, productId }) => {
    const { data } = await httpService.delete(
      productEndpoint + productId,
      payload,
      { params: { showcaseId } }
    );
    return data;
  }
};

export default productService;
