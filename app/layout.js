import { Ubuntu, Ubuntu_Mono, Inter, Roboto, Saira } from "next/font/google";
import "./globals.css";

// Configure fonts
export const inter = Inter({
  subsets: ["latin"], // choose subset
  weight: ["200", "300", "400", "500", "700"], // optional: specify weights you need
});
export const saira = Saira({
  subsets: ["latin"], // choose subset
  weight: ["200", "300", "400", "500", "700"], // optional: specify weights you need
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"], // optional: specify weights you need
});

export const metadata = {
  title: "Bellal hossain",
  description: "Welcome to my portfolio",
};
export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: specify weights you need
});
export const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: specify weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
