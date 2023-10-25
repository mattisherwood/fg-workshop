import React from "react"
import { Card } from "./Card"
import { Stack } from "./Stack"

interface Props {
  children: React.ReactNode
}

export const Main: React.FC<Props> = ({ children }) => (
  <main style={{ flex: 1 }}>
    <Card>
      <Stack
        alignItems='center'
        justifyContent='center'
        padding={24}
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        {children}
      </Stack>
    </Card>
  </main>
)
