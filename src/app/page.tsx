import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import IVInfusions from "@/components/IVInfusions";
import OurServices from "@/components/OurServices";
import ScheduleConsultation from "@/components/ScheduleConsultation";
import SurgeryRecovery from "@/components/SurgeryRecovery";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <HeroSection  /> 
     <OurServices /> 
     <ScheduleConsultation/>
    </>

  );
}
