import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Card } from "./Card"
import { Stack } from "./Stack"
import { Text } from "./Text"

interface Props {}

export const Header: React.FC<Props> = () => (
  <header>
    <Card>
      <Link href='/'>
        <Stack alignItems='center' direction='row' gap={6} padding={12}>
          <Image alt='ACME stores' height={32} src='/acme.svg' width={32} />
          <Text color='white' size={16} weight='bold'>
            ACME Stores are ACE
          </Text>
        </Stack>
      </Link>
    </Card>
  </header>
)
