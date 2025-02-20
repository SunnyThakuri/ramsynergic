import SectorAndInd from "./SectorAndInd";

function MainSectir() {
  return (
    <div
    className="mt-12 mx-20"
    >
      <div
      className="flex flex-col md:flex-row justify-between gap-4 "
      >
        <h1
        className="text-2xl md:text-3xl text-[#2C2C2C] md:w-80 xl:text-nowrap font-semibold"
        >Sector & Industries Served</h1>
        <p
        className="text-[#828282] text-justify  md:w-2/3 xl:w-[530px] lg:mt-0 mt-4 md:mt-0"
        >
          We take pride in our ability to cater to the diverse demands of
          various sectors and industries. Our comprehensive approach ensures
          that our clients receive skilled professionals tailored to their
          recruitment efforts span specific needs, driving success and
          efficiency across all fronts. Our successful across multiple sectors,
          including security, hospitality, driving, oil & gas, construction, and
          various other sectors such as:
        </p>
      </div>
      <SectorAndInd />
    </div>
  );
}

export default MainSectir;
