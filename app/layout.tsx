import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./animate.min.css";
import "./globals.css";
import { Provider } from "./_hooks/appHook";
import Footer from "./_components/Footer";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Hire Jah – Full-Stack Developer & AWS Cloud/DevOps Engineer | Building Scalable Software & Cloud Solutions",
  description:
    "Building reliable software and cloud solutions, with expertise in full-stack development, cloud infrastructure, and DevOps practices.",
  applicationName: "Jah Portfolio",
  authors: [{ name: "Jah Team", url: "https://jah.pages.dev" }],
  keywords: [
    "Jah",
    "full-stack developer",
    "AWS Cloud",
    "DevOps engineer",
    "software development",
    "cloud architecture",
    "web development",
    "DevOps automation",
    "technology consultant",
  ],
  publisher: "Jah",
  openGraph: {
    type: "website",
    url: "https://jah.pages.dev",
    title: "Jah | Full-Stack Developer, AWS Cloud & DevOps Engineer",
    description:
      "Combining technical skills with a passion for innovation, Jah creates scalable software solutions and robust cloud architectures.",
    siteName: "Jah Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/78436201?v=4",
        width: 800,
        height: 600,
        alt: "Jah's Professional Profile",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jahdevlops",
    creator: "@jahdevlops",
    title:
      "Hire Jah – Full-Stack Developer & AWS Cloud/DevOps Engineer | Building Scalable Software & Cloud Solutions",
    description:
      "Crafting software and cloud solutions with precision, reliability, and a touch of innovation.",
    images: "https://avatars.githubusercontent.com/u/78436201?v=4",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://jah.pages.dev",
    languages: {
      "en-US": "https://jah.pages.dev/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
