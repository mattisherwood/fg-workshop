import Image from "next/image"
import React from "react"
import { Card } from "./Card"
import { Stack } from "./Stack"
import { Text } from "./Text"

interface Props {}

export const Footer: React.FC<Props> = () => (
  <footer>
    <Card>
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        padding={12}
      >
        <Stack alignItems='center' direction='row' gap={4}>
          <Text>By</Text>{" "}
          <Image alt='Vercel Logo' height={16} src='/vercel.svg' width={72} />
        </Stack>
        <Stack alignItems='center' direction='row' gap={4}>
          <Image alt='Next.js logo' height={32} src='/nextjs.svg' width={32} />
          <p>App Directory workshop</p>
        </Stack>
      </Stack>
    </Card>
  </footer>
)
