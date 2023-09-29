import "@/styles/variable.css";
import "@/styles/globals.css";

export const metadata = {
  title: "Kyoung2 MiniGame Web",
  description: "Generated by create next app",
};

const style = {
  margin: "0px",
  width: "100vw",
  height: "100vh",
  background: "var(--color-light-brown)",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={style}>{children}</body>
    </html>
  );
}
