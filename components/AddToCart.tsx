"use client"

import api from "@/api"

type Props = {
  productHandle: string
}

export const AddToCart: React.FC<Props> = async ({ productHandle }) => {
  const product = await api.product.fetch(productHandle)

  return (
    <button
      style={{ padding: "10px", cursor: "auto" }}
      disabled={!product.inStock}
    >
      {product.inStock ? "Add to cart" : "Out of stock"}
    </button>
  )
}
