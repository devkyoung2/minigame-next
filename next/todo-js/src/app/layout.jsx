import "../styles/globals.css";
export const metadata = {
  title: "Kyoung2 MiniGame Web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
