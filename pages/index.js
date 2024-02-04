import Image from "next/image";
import bg from '@/images/bg.png'
import footerbg from '@/images/footer.png'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main
      className={`w-full min-h-screen`}
    >
      <div className={`w-full min-h-screen flex flex-col items-left justify-center text-white p-24`}>
        <Image 
          src={bg}
          width={100}
          height={100}
          alt="bg"
          className={`w-full h-screen object-cover z-[-10] absolute top-0 left-0 blur-sm`}
        />
        <h1 className={`${inter.className} text-8xl`}>E-Cell IIIT-Delhi</h1>
        <p className={`text-xl font-semibold my-2`}>ENCOUNTER. ENDEAVOR. EXPLORE.</p>
        <p className={`max-w-[75%]`}>An &quot;Entrepreneurship Cell&quot; at IIIT Delhi (IIITD) serves as a dynamic and vibrant hub that fosters innovation, creativity, and entrepreneurial spirit among the students and the wider community. This cell plays a crucial role in bridging the gap between academic knowledge and real-world application, encouraging students to become not just job seekers but job creators. Here&apos;s an overview:</p>
      </div>
      <div className={`w-full min-h-screen bg-black relative`}>
        <Image 
          src={footerbg}
          width={100}
          height={100}
          alt="bg"
          className={`w-[50%] h-screen object-cover absolute top-0 left-[50%] bg-black blur-sm`}
        />
      </div>
   </main>
  );
}
