import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";


export default function Providers({ children }: { children: ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">


                {children}

            </NextThemesProvider>
        </NextUIProvider>
    )
}
