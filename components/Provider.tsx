'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[] | ReactNode
  }


const Provider = ({children} : Props) => {
    return (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    )
}

export default Provider