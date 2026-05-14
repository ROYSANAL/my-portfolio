import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Sanal Roy | Portfolio",
  description: "Backend Developer & Full Stack Engineer Portfolio. Showcasing experience at LIVE2.AI, NYUN AI, and CREATOR CLUB.",
  keywords: ["Sanal Roy", "Portfolio", "Backend Developer", "Full Stack Developer", "Software Engineer", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 min-h-screen selection:bg-violet-500/30 overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider>
          {/* Animated Background Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/20 dark:bg-violet-600/30 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-600/20 dark:bg-cyan-600/30 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-fuchsia-600/20 dark:bg-fuchsia-600/30 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
