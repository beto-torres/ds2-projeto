import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-20 flex-wrap mx-auto w-5xl">
      <Image
        src={'https://images.unsplash.com/photo-1673300187070-4170c4c60aaa'}
        alt="imagem remota1"
        width={1500}
        height={1572}
        className=" rounded-full"
      />
    </div>
  );
}