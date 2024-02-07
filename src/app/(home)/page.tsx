"use client";
import Image from "next/image";

import { Button } from "@material-tailwind/react";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col p-24">
      <h1>projeto</h1>
      <Button placeholder={'teste'}>Button</Button>
    </main>
    </>
  );
}
