import { motion } from "framer-motion";
import { EquipmentData } from "../../mockData/data";
import { SlideLeft } from "../../utility/animation";

const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What we Offer for you
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              optio?
            </p>
          </div>
          {EquipmentData.map((data) => (
            <motion.div
              variants={SlideLeft(data.delay)}
              initial="hidden"
              whileInView="visible"
              key={data.id}
              className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] duration-300"
            >
              <div className="text-4xl">
                <data.icon />
              </div>
              <p className="text-2xl font-semibold">{data.title}</p>
              <p className="text-gray-500">{data.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
