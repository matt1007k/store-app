
export class EnvsConfig {
  static get apiUrl() {
    return import.meta.env.VITE_API_URL ?? 'VITE_API_URL not defined'
  }

}