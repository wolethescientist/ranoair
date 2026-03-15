import './globals.css';

export const metadata = {
  title: 'Rano Air — Fly the Rano Way',
  description: 'Rano Air Limited — Connecting Nigeria, one flight at a time. Book flights to Lagos, Abuja, Kano, Maiduguri, Sokoto, Kaduna, Katsina, Bauchi and Osubi.',
  keywords: 'Rano Air, Nigerian airline, book flights, Lagos, Abuja, Kano, Maiduguri, Sokoto, Kaduna',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Rano Air — Fly the Rano Way',
    description: 'Connecting Nigeria, one flight at a time.',
    type: 'website',
    images: ['/logo.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-quicksand antialiased">
        {children}
      </body>
    </html>
  );
}
