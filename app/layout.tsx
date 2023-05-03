import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import './globals.css';
import { abcdiatype } from './fonts';

export const metadata = {
  title: 'm3',
  description: 'Web3 front-end framework with advanced typography',
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
