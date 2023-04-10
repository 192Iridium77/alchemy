import axios from "../services/axios";
import { Image } from "./image.types";

const imagesService = {
  getImages: async ({ ownerId }: { ownerId: string }): Promise<Image[]> => {
    const { data } = await axios.get(`/images/${ownerId}`);
    return data;
  },
  getImage: async (imageId: string): Promise<Image> => {
    const { data } = await axios.get(`/images/image/${imageId}`);
    return data;
  },
};

export default imagesService;
