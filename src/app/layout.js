import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-slate-900'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
