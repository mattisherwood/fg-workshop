import api from "@/api"
import { AddToCart, ProductCard, Rating, Stack } from "@/components"
import { Suspense } from "react"

type Props = {
  params: { product: string }
}

export default async function ProductPage({ params }: Props) {
  const product = await api.product.fetch(params?.product!)

  return (
    <Stack>
      <ProductCard product={product} />
      <Rating value={5} />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 100,
              height: "2em",
              background: "#222",
            }}
          >
            ...
          </div>
        }
      >
        <AddToCart productHandle={product.handle} />
      </Suspense>
    </Stack>
  )
}
