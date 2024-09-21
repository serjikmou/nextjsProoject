"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { DiAngularSimple } from "react-icons/di";
import { MyButton } from "./MyButton";

export default function Home() {
  return (
    <div className="flex flex-col">

      <MyButton href="/members" as={Link} size="sm" startContent={<DiAngularSimple />} endContent={<DiAngularSimple />}>
        ok
      </MyButton>


    </div>
  );
}