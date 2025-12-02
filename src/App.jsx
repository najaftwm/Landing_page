import phoneImage from './assets/phone.png';

function App() {
  const features = [
    "Secure & Reliable Trading",
    "Free Market Insights",
    "Smooth & Fast Transactions",
    "Customised Brokerage Options",
    "Call & Trade Support",
    "Simplified User Experience",
  ];

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden font-sans antialiased">
      
      {/* Hero Section - Fixed Height */}
      <header className="bg-[#0f172a] text-white flex-shrink-0 px-6 py-3 text-center">
        <h2 className="text-2xl sm:text-3xl font-medium leading-tight">
          Trade across NSE, BSE & MCX
        </h2>
        <p className="text-xl sm:text-2xl font-medium mt-2">
          — all in one platform
        </p>
      </header>

      {/* Main Content - Takes remaining height */}
      <main className="flex-1 bg-gradient-to-b from-[#f1f5f9] to-[#e0e7ff] px-6 py-6 flex flex-col justify-between">
        <div className="max-w-6xl mx-auto w-full">

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] text-center mb-11">
            One Smart Trading Platform for All Segments
          </h1>

          {/* 2-Column Grid - Always Side by Side */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 items-stretch min-h-0 relative">
            {/* Left: Features */}
            <ul className="space-y-1 sm:space-y-7 text-[#0f172a] relative">
              {features.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-base sm:text-lg md:text-xl mr-2 flex-shrink-0">•</span>
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium leading-tight whitespace-nowrap">
                    {item}
                  </span>
                </li>
              ))}
              
              {/* CTA Button - Spanning from features start to mobile image */}
              <li className="mt-[80px] space-y-3 sm:space-y-4">
                <button className="bg-[#0f172a] text-white w-[calc(200%+1rem)] sm:w-[calc(200%+2rem)] px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-2xl hover:bg-[#1e293b] transition-all">
                  Start Your Trading Journey Today!
                </button>
                
                {/* WhatsApp Button */}
                <div className="flex justify-center">
                  <a
                    href="https://wa.me/9898427047?text=hello,%20i%20wan%20to%20start%20trading"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-xl hover:bg-[#20BA5A] transition-all md:ml-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </li>
            </ul>

            {/* Right: Phone Image - Straight */}
            <div className="flex justify-center items-center h-full min-h-0 -translate-y-[20%] md:-translate-y-[10%]">
              <img
                src={phoneImage}
                alt="Trading App"
                className="w-full max-w-[900px] sm:max-w-[550px] md:max-w-[600px] h-full max-h-full object-contain drop-shadow-2xl scale-110 sm:scale-100"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;