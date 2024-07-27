import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/UI/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";


export default function Home() {
  return (

    
    
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/> 
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Hobbies/>
        <Footer/>
      </div>
    </main>
  );
}


