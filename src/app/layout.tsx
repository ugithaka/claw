import '@/styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-theme='system'
    >
      <body>{children}</body>
    </html>
  );
}
