import Image from "next/image";
import Input from "../components/Input";
import Help from "../components/Help";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
        <h2 className="text-xl md:text-3xl font-semibold text-white px-4">What can I help with?</h2>
        <Input/>
        <Help/>
      </div>
    </main>
  );
}
