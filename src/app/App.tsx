import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import TagManager from "react-gtm-module";

const GTM_ID = import.meta.env.VITE_GTM_ID;

export default function App() {
  useEffect(() => {
    if (GTM_ID) {
      const tagManager = new TagManager();
      tagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
