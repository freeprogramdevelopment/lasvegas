import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Las Vegas - Entertainment Capital of the World</h1>
      
      {/* Full width and height background image */}
      <Image
        src="/las.png"
        alt="Las Vegas street scene with neon lights, casinos, and iconic landmarks at sunset"
        fill
        priority
        className="object-cover"
        quality={90}
      />
    </div>
  );
}
