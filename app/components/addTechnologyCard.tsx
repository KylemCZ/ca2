import Link from "next/link";

export default function Add() {
  return (
        <section className='p-5 min-h-120 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-100'>
          <Link href={"/technologies/add"}
            className={"h-full w-full items-center justify-center flex"}>
            <div className="text-9xl leading-none" style={{transform: 'translateY(-0.1em)'}}>
              +
            </div>
          </Link>
        </section>
  );
}