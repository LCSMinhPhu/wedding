"use client"
import React,{ useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// Greeting Message with Typing Animation
const greetingText = "Chúng tôi trân trọng kính mời bạn/gia đình đến tham dự bữa tiệc quan trọng của gia đình chúng tôi. Sự hiện diện của bạn là niềm vinh hạnh của gia đình chúng tôi.";

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between each character
    },
  },
};

// const flowerVariants = {
//     initial: () => ({
//       y: -100,
//       rotate: Math.random() * 360,
//       opacity: 0,
//     }),
//     animate: (index: any) => ({
//       y: "100vh",
//       rotate: Math.random() * 360,
//       opacity: 1,
//       transition: {
//         duration: 10 + Math.random() * 5,
//         delay: index * 2,
//         repeat: Infinity,
//         ease: "ease-in-out",
//       },
//     }),
//   };
  

export default function WeddingInvitation() {
  const textControls = useAnimation();
  const weddingDate = new Date("2025-03-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4
  const [key, setKey] = useState(0);
//   const [flowerPositions, setFlowerPositions] = useState([]);

//   useEffect(() => {
//     if (typeof window !== 'undefined') { // Only run on client side
//       const positions = Array.from({ length: 10 }).map(() => ({
//         x: Math.random() * window.innerWidth,
//       }));
//       setFlowerPositions(positions);
//     }
//   }, []); // Number of flowers to render

  // Restart text animation every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 10000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    textControls.start("visible");
  }, [key, textControls]);

const typingChild = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Inside the WeddingInvitation component, before the return statement:

// Auto-slide effect for the album
useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 7000); // Change every 7 seconds
  
    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [totalSlides]);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
     {/* Navigation Bar */}
     <nav className="fixed top-0 w-full bg-white bg-opacity-70 shadow-md backdrop-blur-md z-50">
        <ul className="flex justify-center space-x-6 p-4">
          <li><a href="#banner" className="text-pink-500 hover:text-pink-700">Ảnh</a></li>
          <li><a href="#image-cards" className="text-pink-500 hover:text-pink-700">Album</a></li>
          <li><a href="#countdown" className="text-pink-500 hover:text-pink-700">Giờ & địa điểm</a></li>
          <li><a href="#avatars" className="text-pink-500 hover:text-pink-700">Ảnh đại diện</a></li>
          <li><a href="#greeting" className="text-pink-500 hover:text-pink-700">Lời ngõ</a></li>
        </ul>
      </nav>

    {/* Hero Banner */}
    <div id="hero" className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-bold mt-16 p-4" style={{ backgroundImage: "url('/wedding.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", repeatDelay: 30, repeat: Infinity  }}
          className="bg-black bg-opacity-50 p-4 md:p-8 rounded-xl text-center flex flex-col items-center justify-center mt-32 md:mt-48"
        >
            <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-5xl font-bold">Mời bạn tham dự bữa tiệc thành hôn!</motion.h1>
            <motion.h2 
             initial={{ scale: 0.8 }}
             animate={{ scale: 1 }}
             transition={{
               duration: 1.2,
               ease: "easeOut",
               repeat: Infinity,
               repeatType: "mirror",
             }}
            className="text-3xl md:text-4xl font-bold text-pink-500 flex items-center space-x-2 mt-4">
                <span>Minh Phu</span>
                <span className="text-red-500">♥</span>
                <span>Thu Thủy</span>
            </motion.h2>
        </motion.div>
    </div>

{/* Avatar Section */}
<div id="avatars" className="w-full min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#ffe4c4]">
  <h2 className="text-2xl md:text-4xl mb-6">Cặp đôi</h2>
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 gap-12"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.6, // Slower delay between each avatar
        },
      },
    }}
  >
    {/* Groom Avatar */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.03 }} // More subtle hover effect
      transition={{ duration: 0.5 }} // Smooth hover transition
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", repeatDelay: 30, repeat: Infinity } },
      }}
    >
      <div className="w-60 h-60 rounded-full shadow-lg border-8 border-pink-300 bg-gray-300 flex items-center justify-center overflow-hidden mb-4">
        <img src="/minhphuavt.png" alt="Minh Phu" className="object-cover w-full h-full rounded-full" onError={(e) => e.currentTarget.style.display='none'} />
      </div>
      <h3 className="text-2xl md:text-3xl">Minh Phú</h3>
      <p className="text-lg text-gray-600 mt-2">Con ông: <span className="font-bold">Nguyễn Hạnh</span><br/>Con bà: <span className="font-bold">Nguyễn Thị Thu Sương</span></p>
    </motion.div>

    {/* Bride Avatar */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.03 }} // More subtle hover effect
      transition={{ duration: 0.5 }} // Smooth hover transition
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", repeatDelay: 30, repeat: Infinity  } },
      }}
    >
      <div className="w-60 h-60 rounded-full shadow-lg border-8 border-pink-300 bg-gray-300 flex items-center justify-center overflow-hidden mb-4">
        <img src="/thuthuyavt.png" alt="Thu Thủy" className="object-cover w-full h-full rounded-full" onError={(e) => e.currentTarget.style.display='none'} />
      </div>
      <h3 className="text-2xl md:text-3xl">Thu Thủy</h3>
      <p className="text-lg text-gray-600 mt-2">Con ông: <span className="font-bold">Phạm Đắc Yên</span><br/>Con bà: <span className="font-bold">Lương Thị Sớn</span></p>
    </motion.div>
  </motion.div>
</div>

   {/* Countdown Timer */}
   <div id="countdown" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-300 to-pink-100 text-white text-center p-4 overflow-hidden" style={{ backgroundImage: "url('/wedding2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 , repeatDelay: 30, repeat: Infinity }}
        className="text-xl md:text-3xl mt-16" style={{fontWeight: '500'}}>Đếm ngược tới ngày cưới</motion.h1>
        <strong className="mt-12 text-lg px-4 text-center">Tiệc cưới tổ chức lúc 17h30 ngày 15 tháng 3 năm 2025 nhầm ngày 16 tháng 2 năm Ất Tị<br/></strong>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div 
            initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            key={unit} className="w-20 h-20 md:w-24 md:h-24 bg-white text-pink-500 flex flex-col items-center justify-center rounded-full shadow-xl text-3xl border-4 border-pink-300">
                <span>{value}</span>
                <span className="text-sm capitalize mt-1">{unit}</span>
            </motion.div>
            ))}
        </div>
        <strong className="mt-12 text-lg px-4 text-center">Địa điểm: Nhà hàng The Chautaur, 20 Đường Phan Văn Trị, phường 1, Gò Vấp, Thành phố Hồ Chí Minh. Sảnh POLLUX<br/><a href='https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+The+Chateau/@10.8225792,106.5486379,11z/data=!4m6!3m5!1s0x317528f0a664a8f7:0xede493b8e23234a5!8m2!3d10.8291893!4d106.6834101!16s%2Fg%2F11bttrnn02?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className='text-white underline'>Xem trên Google Maps</a></strong>
        </div>



    {/* Wedding Image Cards Section */}
    <div id="image-cards" className="w-full min-h-screen py-12 flex flex-col items-center justify-center bg-[#ffe4c4] mt-4">
        <h2 className="text-3xl text-center font-bold text-pink-600 mb-8 w-full">Album Wedding</h2>
        <div className="w-full max-w-6xl overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="min-w-full">
              <img src="/wedding2.jpg" alt="Wedding Moment 1" className="w-full h-80 md:h-[40rem] object-contain rounded-xl shadow-lg" />
            </div>
            <div className="min-w-full">
              <img src="/wedding3.jpg" alt="Wedding Moment 2" className="w-full h-80 md:h-[40rem] object-contain rounded-xl shadow-lg" />
            </div>
            <div className="min-w-full">
              <img src="/wedding2.jpg" alt="Wedding Moment 3" className="w-full h-80 md:h-[40rem] object-contain rounded-xl shadow-lg" />
            </div>
            <div className="min-w-full">
              <img src="/wedding4.jpg" alt="Wedding Moment 4" className="w-full h-80 md:h-[40rem] object-contain rounded-xl shadow-lg" />
            </div>
          </div>
          <button onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)} className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-gray rounded-full p-2" style={{ fontSize: '32px', fontWeight: '600'}}>
            &lt;
          </button>
          <button onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)} className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray rounded-full p-2" style={{ fontSize: '32px', fontWeight: '600'}}>
            &gt;
          </button>
        </div>
      </div>

      {/* Greeting Message */}
      <div id="greeting" className="w-full h-screen flex flex-col items-center text-white justify-center shadow-md text-center scroll-mt-24 p-6 bg-gradient-to-b" style={{ backgroundImage: "url('/wedding4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h3 className="text-2xl font-semibold">Kính gữi bạn bè và gia đình</h3>
        <motion.div
        variants={typingContainer}
        initial="hidden"
        animate={textControls}
        className="text-center text-2xl md:text-3xl text-white px-4 max-w-3xl mx-auto"
        >
        {greetingText.split("").map((char, index) => (
            <motion.span key={index} variants={typingChild}>
            {char}
            </motion.span>
        ))}
        </motion.div>;
        {/* <strong className="mt-4  text-2xl">Chúng tôi trân trọng kình mời bạn/gia đình đến tham dự bữa tiệc quan trọng của gia đình chúng tôi sự hiện diện của bạn là niềm vinh hạnh của gia đình.</strong> */}
        <p className="mt-4 text-5xl font-bold">Thank you!</p>
      </div>


    {/* Falling Flowers Animation */}
    {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {flowerPositions.map((pos, index) => (
          <motion.img
            key={index}
            src="/flower.png" // Use the path to your flower image
            alt="Falling Flower"
            className="w-12 h-12 absolute"
            custom={index}
            variants={flowerVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div> */}
  </div>
  );

}