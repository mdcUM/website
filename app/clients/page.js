'use client'

import ClientsView from "../components/clientscard";
import StickyHeader from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
        <StickyHeader />
        <ClientsView />
        <Footer social={{instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting"}}/>
    </>
  
);
}
