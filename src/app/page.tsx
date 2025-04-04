import Image from "next/image";
import Input from "../components/Input";
import Help from "../components/Help";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="w-full mx-auto flex flex-col gap-5 items-center">
        <h2 className="text-xl md:text-3xl font-semibold text-white px-4">What can I help with?</h2>
        <Input/>
        <Help/>
      </div>
    </main>
  );
}
