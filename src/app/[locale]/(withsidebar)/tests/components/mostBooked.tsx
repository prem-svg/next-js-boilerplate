import { VirtualBodyParts } from "@/components";

const virtualBodyParts = [
  {
    id: 1,
    name: "Heart",
    img: "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/heart-removebg-preview.png?alt=media&token=830cbf8d-23d5-4c81-8a18-a9f581ce1ac0",
  },
  {
    id: 2,
    name: "Kidney",
    img: "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/lungs-removebg-preview.png?alt=media&token=0f165877-4dd3-44c5-a55a-8d46a00cceb1",
  },
  {
    id: 3,
    name: "Liver",
    img: "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/liver-removebg-preview.png?alt=media&token=f50434ab-caf5-4053-b28a-e38b513f6e00",
  },
  {
    id: 4,
    name: "Bone",
    img: "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/knee-removebg-preview.png?alt=media&token=1e1ab161-21b7-44c1-ac1f-363b70635603",
  },
  {
    id: 5,
    name: "Blood",
    img: "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/blood-removebg-preview.png?alt=media&token=27e4c3b8-a6d9-42ee-8d05-03cb776dc8ad",
  },
  {
    id: 6,
    name: "Hormones",
    img: "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/hormonu-removebg-preview%20(1).png?alt=media&token=86aa673a-10fd-4bc4-b8f9-921439714632",
  },
];

export const MostBookedTests = () => {
  return (
    <div className="font-source px-4 md:mt-6 md:px-6 lg:px-10"> {/* Added overflow-hidden */}
      <div className="grid grid-cols-12 md:gap-12 mt-5">
        <div className="col-span-12 hidden md:block md:col-span-6">
          <p className="font-source font-semibold text-h3 lg:text-h1">
            For vital body
          </p>
          <p className="font-source font-semibold text-h3 lg:text-h1">
            Organs
          </p>
          <p className="text-body4 mt-3 leading-4">
            Explore our comprehensive range of diagnostic tests tailored for
            vital body organs. Our specialized diagnostic tests focus on
            evaluating the well-being of essential body organs, ensuring you
            receive the care you deserve.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <p className="font-source md:hidden font-semibold text-body3 md:text-h4">
            For vital body parts
          </p>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
            {virtualBodyParts?.map((val) => (
              <div key={val?.id} className="w-full">
                <VirtualBodyParts key={val?.id} {...val} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
