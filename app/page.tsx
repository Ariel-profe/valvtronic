import { Explore } from "./components/homepage/Explore";
import { Hero } from "./components/homepage/Hero";
import { VxClipMask } from "./components/homepage/VxClipMask";
import { BrayClipMask } from "./components/homepage/BrayClipMask";
import { IndustrialTrainning } from "./components/homepage/IndustrialTrainning";
import { Discover } from "./components/homepage/Discover";

export default function Home() {
  return (
    <div>
      <VxClipMask />
      <Hero />
      <Explore />
      <IndustrialTrainning />
      <Discover />
      <BrayClipMask />
  </div>
  )
}