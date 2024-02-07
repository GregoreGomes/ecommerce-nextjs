"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@material-tailwind/react";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col p-24">
      <h1>projeto</h1>
      <Link href={'/login'}>
        <Button placeholder={'teste'}>Fazer login</Button>
      </Link>
    </main>
    </>
  );
}
