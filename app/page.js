"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalAPI from "./_utils/GlobalApi";
import { useEffect, useRef, useState } from "react";
import InstructionAppointment from "./_components/InstructionAppointment";

export default function Home() {
  const contentRef = useRef();
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);
  const getDoctorList = () => {
    // Fetch doctor list from API
    GlobalAPI.getDoctorList().then(resp => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div>
      <Hero scrollTargetRef={contentRef} />
      <CategorySearch />
      <InstructionAppointment scrollTargetRef={contentRef} />
      <DoctorList doctorList={doctorList} ref={contentRef} />
    </div>
  );
}
