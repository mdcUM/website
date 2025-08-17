import ClientsView from "../components/clientscard";
import StickyHeader from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: 'Clients | MDC',
  description: 'Clients, what we did, and what they said.',
};

export default function Page() {
  return (
    <>
        <StickyHeader />
        <ClientsView />
        <Footer />
    </>
  
);
}
