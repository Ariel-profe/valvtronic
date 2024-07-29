
import { BrayClipMask } from "@/components/homepage/BrayClipMask";
import { Discover } from "@/components/homepage/Discover";
import { Explore } from "@/components/homepage/Explore";
import { Hero } from "@/components/homepage/Hero";
import { IndustrialTrainning } from "@/components/homepage/IndustrialTrainning";
import { VxClipMask } from "@/components/homepage/VxClipMask";

export default function Home() {
  return (
    <div className="px-3 lg:px-6">
      <VxClipMask />
      <Hero />
      <Explore />
      <IndustrialTrainning />
      <Discover />
      <BrayClipMask />
  </div>
  )
}