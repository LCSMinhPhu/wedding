"use client"
import React,{ useState, useEffect } from "react";

export default function WeddingInvitation() {
  const weddingDate = new Date("2025-06-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
     {/* Navigation Bar */}
     <nav className="fixed top-0 w-full bg-white bg-opacity-70 shadow-md backdrop-blur-md z-50">
        <ul className="flex justify-center space-x-6 p-4">
          <li><a href="#banner" className="text-pink-500 hover:text-pink-700">Ảnh</a></li>
          <li><a href="#countdown" className="text-pink-500 hover:text-pink-700">Giờ & địa điểm</a></li>
          <li><a href="#avatars" className="text-pink-500 hover:text-pink-700">Ảnh đại diện</a></li>
          <li><a href="#greeting" className="text-pink-500 hover:text-pink-700">Lời ngõ</a></li>
        </ul>
      </nav>

    {/* Hero Banner */}
    <div id="hero" className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-bold mt-16 p-4" style={{ backgroundImage: "url('/wedding.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="bg-black bg-opacity-50 p-4 md:p-8 rounded-xl text-center flex flex-col items-center justify-center mt-32 md:mt-48">
            <h1 className="text-4xl md:text-5xl font-bold">Mời bạn tham dự bữa tiệc thành hôn!</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500 flex items-center space-x-2 mt-4">
                <span>Minh Phu</span>
                <span className="text-red-500">♥</span>
                <span>Thu Thủy</span>
            </h2>
        </div>
    </div>

      {/* Avatar Section */}
      <div id="avatars" className="w-full min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#ffe4c4]">
        <h2 className="text-2xl md:text-4xl mb-6">Cặp đôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-60 h-60 rounded-full shadow-lg border-8 border-pink-300 bg-gray-300 flex items-center justify-center overflow-hidden mb-4">
              <img src="/minhphuavt.png" alt="Minh Phu" className="object-cover w-full h-full rounded-full" onError={(e) => e.currentTarget.style.display='none'} />
            </div>
            <h3 className="text-2xl md:text-3xl">Minh Phú</h3>
            <p className="text-lg text-gray-600 mt-2">Con ông: <span className="font-bold">Nguyễn Hạnh</span><br/>Con bà: <span className="font-bold">Nguyễn Thị Thu Sương</span></p>
            <p className="text-base text-gray-500 mt-2">Là trưởng nam trong một gia đình với 3 người con.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-60 h-60 rounded-full shadow-lg border-8 border-pink-300 bg-gray-300 flex items-center justify-center overflow-hidden mb-4">
              <img src="/thuthuyavt.png" alt="Thu Thủy" className="object-cover w-full h-full rounded-full" onError={(e) => e.currentTarget.style.display='none'} />
            </div>
            <h3 className="text-2xl md:text-3xl">Thu Thủy</h3>
            <p className="text-lg text-gray-600 mt-2">Con ông: <span className="font-bold">Phạm Đắc Yên</span><br/>Con bà: <span className="font-bold">Lương Thị Sớn</span></p>
            <p className="text-base text-gray-500 mt-2">Là trưởng nữ trong một gia đình với 3 người con.</p>
          </div>
        </div>
      </div>

   {/* Countdown Timer */}
   <div id="countdown" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-300 to-pink-100 text-white text-center p-4 overflow-hidden" style={{ backgroundImage: "url('/wedding2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 className="text-xl md:text-3xl">Đếm ngược tới ngày cưới</h1>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="w-20 h-20 md:w-24 md:h-24 bg-white text-pink-500 flex flex-col items-center justify-center rounded-full shadow-xl text-3xl border-4 border-pink-300">
                <span>{value}</span>
                <span className="text-sm capitalize mt-1">{unit}</span>
            </div>
            ))}
        </div>
        <strong className="mt-8 text-lg px-4 text-center">Địa điểm: Nhà hàng The Chautaur, 20 Đường Phan Văn Trị, phường 1, Gò Vấp, Thành phố Hồ Chí Minh. Sảnh POLLUX<br/><a href='https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+The+Chateau/@10.8225792,106.5486379,11z/data=!4m6!3m5!1s0x317528f0a664a8f7:0xede493b8e23234a5!8m2!3d10.8291893!4d106.6834101!16s%2Fg%2F11bttrnn02?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className='text-white underline'>Xem trên Google Maps</a></strong>
        </div>



    {/* Wedding Image Cards Section */}
    <div id="image-cards" className="w-full min-h-screen py-12 flex flex-col items-center justify-center bg-[#ffe4c4] mt-4">
        <h2 className="text-3xl text-center font-bold text-pink-600 mb-8 w-full">Album Wedding</h2>
        <div className="w-full max-w-6xl overflow-hidden relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="min-w-full">
              <img src="/wedding2.jpg" alt="Wedding Moment 1" className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
            <div className="min-w-full">
              <img src="/wedding3.jpg" alt="Wedding Moment 2" className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
            <div className="min-w-full">
              <img src="/wedding2.jpg" alt="Wedding Moment 3" className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
            <div className="min-w-full">
              <img src="/wedding4.jpg" alt="Wedding Moment 4" className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
          <button onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)} className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white rounded-full p-2 shadow-lg">
            &lt;
          </button>
          <button onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)} className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white rounded-full p-2 shadow-lg">
            &gt;
          </button>
        </div>
      </div>

      {/* Greeting Message */}
      <div id="greeting" className="w-full h-screen flex flex-col items-center text-white justify-center shadow-md text-center scroll-mt-24 p-6 bg-gradient-to-b" style={{ backgroundImage: "url('/wedding4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h3 className="text-2xl font-semibold">Kính gữi bạn bè và gia đình</h3>
        <strong className="mt-4  text-2xl">Chúng tôi trân trọng kình mời bạn/gia đình đến tham dự bữa tiệc quan trọng của gia đình chúng tôi sự hiện diện của bạn là niềm vinh hạnh của gia đình.</strong>
        <p className="mt-4 text-5xl font-bold">Thank you!</p>
      </div>
  </div>
  );
}