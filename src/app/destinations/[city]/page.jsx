import { destinationById, destinations } from '@/data/destinations';
import DestinationClient from './DestinationClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return destinations.map((d) => ({ city: d.id }));
}

export async function generateMetadata({ params }) {
  const dest = destinationById[params.city];
  if (!dest) return { title: 'Destination Not Found' };
  return {
    title: `${dest.name} — Rano Air`,
    description: `Fly to ${dest.name}, ${dest.state} with Rano Air. ${dest.description.slice(0, 120)}...`,
  };
}

export default function DestinationPage({ params }) {
  const dest = destinationById[params.city];
  if (!dest) notFound();
  return <DestinationClient dest={dest} />;
}
