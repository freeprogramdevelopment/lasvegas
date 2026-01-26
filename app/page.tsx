import Image from "next/image";
import Popup from "./components/Popup";

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">Las Vegas - Entertainment Capital of the World</h1>
        
        {/* Desktop image - hidden on mobile */}
        <Image
          src="/las.png"
          alt="Las Vegas street scene with neon lights, casinos, and iconic landmarks at sunset"
          fill
          priority
          className="hidden md:block object-cover"
          quality={90}
          sizes="100vw"
        />
        
        {/* Mobile image - visible only on mobile */}
        <Image
          src="/lasvegas1.png"
          alt="Las Vegas street scene with neon lights, casinos, and iconic landmarks at sunset"
          fill
          priority
          className="block md:hidden object-cover"
          quality={90}
          sizes="100vw"
        />
      </div>
      
      {/* Popup component */}
      <Popup />
    </>
  );
}
