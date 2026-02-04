"use client"
const YearExp = () => {
  const data = [
    {
      years: "15",
      title: "(Years of work)",
      desc: "working on cool projects in the company of talented people",
    },
    {
      years: "20",
      title: "(different niche projects)",
      desc: "but united by one common goal - to create truly new and breakthrough things",
    },
    {
      years: "15",
      title: "(Years of work)",
      desc: "working on cool projects in the company of talented people",
    },
  ];


  return (
    <section

      className="relative z-[1] my-[32px] flex xl:hidden w-full justify-center   mb-[50px] "
    >
      <div className="relative h-full w-[330px] md:w-[521px]  bg-[#CCE4FF]">
        <div
       
          className="flex flex-col items-center gap-[6rem] py-[84px] lg:gap-[10vw]"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex h-[163px] w-[266px]  flex-col items-center justify-center gap-[16px] lg:gap-[24px] lg:h-[303px] lg:w-[350px]"
            >
              <h1 className="font-anton text-b1 lg:text-d1-tablet text-[#007AFF] uppercase">
                {item.years}
              </h1>
              <h2 className="font-anton text-[18px] text-nowrap text-[#007AFF] uppercase lg:text-[32px]">
                {item.title}
              </h2>
              <p className="font-cabinet text-p2 text-center text-[#414141] lg:text-[24px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearExp;
