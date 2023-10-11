import { EnvsConfig } from "../config"

export class ProductService {
  static getAllProducts () {
    return fetch(`${EnvsConfig.apiUrl}/products`)
            .then(res => res.json());
  }
  static getProductID (id: string | undefined) {
    return fetch(`${EnvsConfig.apiUrl}/products/${id}`)
            .then(res => res.json());
  }
}

ProductService.getAllProducts()