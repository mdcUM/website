import ClientPage from "./ClientPage";
import { CLIENTS } from "../../data/clients";

export function generateStaticParams() {
  return CLIENTS.map((c) => ({
    clientId: c.slug,  
  }));
}

export default function Page({ params }) {
  return <ClientPage slug={params.clientId} />; 
}
