import { Ubuntu, Ubuntu_Mono, Inter, Roboto, Saira } from "next/font/google";
import "./globals.css";

// Configure fonts
export const inter = Inter({
  subsets: ["latin"], // choose subset
  weight: ["200", "300", "400", "500", "700"], // optional: specify weights you need
});
export const saira = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className="bg-[#090909] text-[#f4efe9] antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(204,70,27,0.16),_transparent_20%),radial-gradient(circle_at_top_right,_rgba(153,27,27,0.12),_transparent_25%),linear-gradient(180deg,#090909_0%,#111111_28%,#0b0b0b_100%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
