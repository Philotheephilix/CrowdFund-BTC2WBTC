import { useRouter } from 'next/router';
import SwapComponent from "../SwapComponent";  // Make sure the import path is correct

export default function Submit() {
  const router = useRouter();
  const { title } = router.query;

  // Check if title is defined
  if (!title) {
    return <p>Loading...</p>; // Or some other loading indicator
  }

  // Ensure title is a string and decode it
  const address = decodeURIComponent(Array.isArray(title) ? title[0] : title);

  return (
    <SwapComponent address={address} />
  );
}