"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    if (error) {
      console.error("Error occurred:", error);
    }
  }, [error]);

  return (
    <html>
      <body>
        <h1>Something went wrong</h1>
        <p>{error?.message}</p>
      </body>
    </html>
  );
}
