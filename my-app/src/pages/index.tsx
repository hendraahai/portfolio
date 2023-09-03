import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import Image from "next/image";

export default function Home() {
  return (
    <main className={`mx-80 mt-40`}>
      <h1 className={`${oswald.className} text-7xl`}>
        HI! IM <span className={`text-oren`}>HENDRA</span>
      </h1>
      <div className="flex">
        <Image
          src="/arrow.png"
          width={100}
          height={100}
          alt="Picture of the author"
          className="pt-0 ml-0 p-0"
          style={{ transform: "rotate(60deg)", position: "absolute" }}
        />

        <p className={`ml-24 pt-20 relative ${oswald.className} text-lg`}>
          {`I'm a dedicated tech enthusiast who has chosen to make a
      transformative career shift from account management to the world of
      software development. My journey began with a leap of faith, to pursue
      my lifelong passion for technology. Through rigorous training, I
      successfully completed the Hacktiv8 bootcamp, emerging as a skilled
      full-stack web developer. With a focus on web development and mobile
      applications, I am now equipped with the tools to bring innovative
        digital solutions to life.`}
        </p>
      </div>
    </main>
  );
}
