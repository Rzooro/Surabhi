import {
  Carousel,
  Impact,
  TG_Impact,
  Projects,
  SmallProjects,
  Partners,
  img1,
  img2,
  img3,
  img4,
} from "../Components/Home";

function Home() {
  const slides = [img1, img2, img3, img4];

  return (
    <div className="flex flex-col min-h-screen">
      <Carousel slides={slides} className="" />
      <Projects />
      <Impact />
      <TG_Impact />
      <SmallProjects />
      <Partners />
    </div>
  );
}

export default Home;
