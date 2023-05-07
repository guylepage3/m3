import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import './globals.css';
import { abcdiatype } from './fonts';

export const metadata = {
  title: 'm3',
  description: 'm3 is an advanced typography framework.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={abcdiatype.className}>{children}</body>
    </html>
  )
}
