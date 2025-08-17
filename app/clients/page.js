import ClientsView from "../components/clientscard";
import StickyHeader from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: 'Clients | Your Org',
  description: 'Partners, what we shipped, and what they said.',
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
