import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

class APIClient<T> {
  endPoint: string;
  // select: (response: R) => T[];

  constructor(endPoint: string) {
    this.endPoint = endPoint;
    // this.select = select;
  }

  getAll = () => {
    return axiosInstance.get<T>(this.endPoint).then((res) => res.data);
  };
  get = (id: number) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
