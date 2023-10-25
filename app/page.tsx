import api from "@/api"
import { Grid, ProductCard } from "@/components"
import Link from "next/link"

export default async function Page() {
  const products = await api.product.list()
  return (
    <Grid>
      {products ? (
        products.map((product, index) => (
          <Link key={index} href={`/product/${product.handle}`}>
            <ProductCard product={product} />
          </Link>
        ))
      ) : (
        <p>No products</p>
      )}
    </Grid>
  )
}
