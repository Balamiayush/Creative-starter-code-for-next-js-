"use client";
import { useScreenDetector } from "@/shared/hooks/use-screen-detector";
import AboutTeam from "./AboutTeam";
import AboutTeamMobile from "./AboutTeamMobile";

export default function AboutMainTeam() {
  const width = useScreenDetector();
  return (
 
    <div className="w-full h-full overflow-hidden relative">
       <AboutTeam />
       <AboutTeamMobile/>

  </div>
  );
}
