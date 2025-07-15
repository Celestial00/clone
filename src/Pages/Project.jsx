import WorkSection from '../Components/WorkSection'

export default function Project() {
  return (
    <>
      <div className=" mt-40 gap-4 flex flex-col">
        <h1 className="text-7xl text-[#181818] dark:text-white font-bold">Projects</h1>
        <p className="text-2xl text-[#80808080]">
          Projects and ideas I’ve worked on
        </p>
      </div>

      <WorkSection page={true} />
    </>
  );
}
