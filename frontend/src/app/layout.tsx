import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import "./globals.css";
import { darkTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finaces",
  description: "Powered by Besigne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={darkTheme}>
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
