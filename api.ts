import { Product } from "./types"

const urlBase = "https://frasers-workshop-api.vercel.app"

const api = {
  product: {
    list: async (): Promise<Product[]> =>
      fetch(`${urlBase}/api/products`, {
        next: { revalidate: 3600 * 24 },
      }).then((res) => res.json()),
    fetch: async (handle: string): Promise<Product> =>
      fetch(`${urlBase}/api/products/${handle}`, {
        next: { revalidate: 3600 * 24 },
      }).then((res) => res.json()),
  },
  inStock: {
    fetch: async (handle: string): Promise<Product> =>
      fetch(`${urlBase}/api/products/${handle}`, {
        next: { revalidate: 0 },
      }).then((res) => res.json()),
  },
}

export default api
