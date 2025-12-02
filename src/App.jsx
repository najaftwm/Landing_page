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
              <li className="mt-[80px]">
                <button className="bg-[#0f172a] text-white w-[calc(200%+1rem)] sm:w-[calc(200%+2rem)] px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-2xl hover:bg-[#1e293b] transition-all">
                  Start Your Trading Journey Today!
                </button>
              </li>
            </ul>

            {/* Right: Phone Image - Straight */}
            <div className="flex justify-center items-center h-full min-h-0">
              <img
                src={phoneImage}
                alt="Trading App"
                className="w-full max-w-[900px] sm:max-w-[550px] md:max-w-[600px] h-full max-h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;