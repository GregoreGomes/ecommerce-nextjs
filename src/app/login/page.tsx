"use client";

import Link from "next/link";
import { Button } from "@material-tailwind/react";


export default function Login() {
  return (
    <>
    <div>
      <h1>pagina de login</h1>
      <Link href={'/'}>
        <Button placeholder={'teste'}>Voltar para a home</Button>
      </Link>
    </div>
    </>
  );
}
