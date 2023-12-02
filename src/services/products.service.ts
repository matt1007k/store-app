import { EnvsConfig } from "../config"

// interface
interface GetAllProductsDTO {
  limit: number;
}

export class ProductService {
  static getAllProducts ({ limit=5 } : GetAllProductsDTO) {
    return fetch(`${EnvsConfig.apiUrl}/products?limit=${limit}`)
            .then(res => res.json());
  }
  static getProductID (id: string | undefined) {
    return fetch(`${EnvsConfig.apiUrl}/products/${id}`)
            .then(res => res.json());
  }
}
