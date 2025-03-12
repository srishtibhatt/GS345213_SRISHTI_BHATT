"use client";

import { Navigation } from "../components/Navigation";
// import StoresPage from '../pages/StoresPage';
// import SKUsPage from '../pages/SKUsPage';
// import PlanningPage from '../pages/PlanningPage';
// import ChartPage from '../pages/ChartPage';
import { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../redux/store";
import "./globals.css";
import Homepage from "./home";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isRoot = router.pathname === "/";
  return (
    <Provider store={store}>
      <Navigation
        isAuthenticated={true}
        onAuthToggle={() => console.log("success")}
      />
      {isRoot && <Homepage />}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
