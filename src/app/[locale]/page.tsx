'use client'

import { ButtonComponent } from "@/components";
import { useRouter } from 'next/navigation';

export default function Home() {

  const route = useRouter();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
      <h1 className="text-4xl font-bold">Home Page</h1>
      <br/>
      <ButtonComponent
      handleOnClick={()=>route.push('/signup')}
      buttonText="Go to Sign up" />
      </div>
    </div>
  );
}
