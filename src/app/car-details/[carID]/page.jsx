"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PuffLoader from "react-spinners/PuffLoader";
import CartContext from "../../context/cart"; 
import { useContext } from "react";

// Car data
const cars = [
  {
    carId: 1,
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "/images/carSlider/car01.svg",
    info: [
      { icon: "/icons/carSlider/gearShift.svg", text: "Manual" },
      { icon: "/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    carId: 2,
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "/images/carSlider/car02.svg",
    info: [
      { icon: "/icons/carSlider/gearShift.svg", text: "Manual" },
      { icon: "/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    carId: 3,
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "/images/carSlider/car03.svg",
    info: [
      { icon: "/icons/carSlider/gearShift.svg", text: "Automatic" },
      { icon: "/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    carId: 4,
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "/images/carSlider/car02.svg",
    info: [
      { icon: "/icons/carSlider/gearShift.svg", text: "Automatic" },
      { icon: "/icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "/icons/carSlider/gas.svg", text: "Gas" },
      { icon: "/icons/carSlider/engine.svg", text: "1600 HP" },
      { icon: "/icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
];

export default function OrderDetails() {
  const { carID } = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(carDetail); 
  };

  useEffect(() => {
    if (!carID) return;

    const selectedCar = cars.find((car) => car.carId === Number(carID));
    setCarDetail(selectedCar);
    setLoading(false);
  }, [carID]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PuffLoader size={60} color={"#36d7b7"} loading={loading} />
      </div>
    );
  }


  if (!carDetail) {
    return <div>Car not found</div>;
  }


  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={i} className="text-orange-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-orange-500" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={i} className="text-orange-500" />
        ))}
      </>
    );
  };

  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
    <Header/>
    <div className="max-w-7xl px-5 mx-auto py-10 my-5">
      <div className="flex flex-col lg:flex-row justify-center gap-[20px] mt-8">
        {/* Car Image Section */}
        <div className="w-full lg:w-[500px] flex flex-col mb-8 lg:mb-0">
          <div className="rounded overflow-hidden transform transition-transform hover:scale-105">
            <Image
              src={carDetail.image}
              alt={carDetail.name}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="object-cover mb-4"
            />
          </div>
        </div>

        {/* Car Details Section */}
        <div className="container px-4 py-8 w-full lg:w-[500px]">
          <h1 className="text-xl font-bold mb-4">{carDetail.name}</h1>
          <p className="text-gray-600 mb-4 font-semibold">{carDetail.type}</p>

          <div className="flex items-center space-x-2 mt-4">
            <span>Stars:</span>
            <div className="ml-4 flex items-center">
              {renderStars(carDetail.stars)}
            </div>
          </div>

          <div className="mt-4">
            <span className="text-gray-800">Price:</span>
            <span className="text-orange-500 font-semibold uppercase ml-4">
              {carDetail.price}/day
            </span>
          </div>

          <div className="mt-4">
            <span className="text-gray-800">Car Features:</span>
            <ul className="grid grid-cols-2 mt-2">
              {carDetail.info.map((item, index) => (
                <li key={index} className="flex items-center mt-2">
                  <div className="bg-black border-2 border-black rounded-full p-2 mr-2">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={20}
                      height={20}
                    />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </main>
  );
}
