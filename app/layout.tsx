import { Footer, Header, Main, Stack } from "@/components"
import { ReactNode } from "react"
import "../globals.css"

interface Props {
  children: ReactNode
}

export default function HomepageLayout({ children }: Props) {
  return (
    <Stack
      alignItems='stretch'
      style={{
        minHeight: "100vh",
        maxWidth: "56rem",
        width: "100%",
        margin: "auto",
        padding: 24,
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Stack>
  )
}
