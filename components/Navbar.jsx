import { ChevronDown, Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="w-full flex">

        <div className="bg-[#5E2A29] flex-1 md:flex-3">
          <div className="px-4 md:px-8 py-4 md:py-2.5 flex items-center justify-center gap-3">

            <p className="text-white text-[11px] md:text-[14px] font-medium text-center leading-snug">

              Joyous July Registration Now Open! Secure Your Spot First!

            </p>

            <button className="bg-[#F5F2EC] text-[#5E2A29] px-5 md:px-6 py-2 md:py-2 rounded-full text-[11px] md:text-sm font-medium whitespace-nowrap hover:opacity-90 transition">

              Register Now

            </button>

          </div>
        </div>



        <div className="hidden md:flex md:flex-1 bg-[#F5F2EC] items-center justify-center px-8">

          <div className="flex items-center gap-4 text-[#5E2A29] text-[13px]">

            <p className="cursor-pointer hover:opacity-80 transition">
              Contact Us
            </p>

            <span>|</span>

            <p className="cursor-pointer hover:opacity-80 transition">
              Host Your Event
            </p>

          </div>

        </div>

      </div>



      {/* Main Navbar */}
      <nav className="bg-[#FAFAFA] border-b border-gray-200">

        <div className="max-w-350 mx-auto px-5 md:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="shrink-0">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-42.5 md:w-60 object-contain"
            />

          </div>



          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10 text-[#5E2A29]">

            <li className="relative group">

              <div className="flex items-center gap-1 uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] group-hover:text-[#C56B2D] transition-colors duration-300">

                ACTIVITIES

                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

              </div>


              <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white min-w-[280px] rounded-md shadow-2xl p-6 z-50">

                <ul className="space-y-5 normal-case tracking-normal text-[15px] text-[#222]">

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">

                    Inspiration and Founder

                  </li>



                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">

                    Global Movement

                  </li>



                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">

                    Our Story

                  </li>

                </ul>

              </div>

            </li>



            <li className="relative group">

              <div className="flex items-center gap-1 uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] group-hover:text-[#C56B2D] transition-colors duration-300">

                VISIT

                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

              </div>


              <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white min-w-[280px] rounded-md shadow-2xl p-6 z-50">
                <ul className="space-y-5 normal-case tracking-normal text-[15px] text-[#222]">

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                   Explore
                  </li>
                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                   Direction and Transportation
                  </li>

                </ul>
              </div>
            </li>




            <li className="relative group">

              <div className="flex items-center gap-1 uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] group-hover:text-[#C56B2D] transition-colors duration-300">

                ACTIVITIES

                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

              </div>

              <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white min-w-[280px] rounded-md shadow-2xl p-6 z-50">

                <ul className="space-y-5 normal-case tracking-normal text-[15px] text-[#222]">

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                    Wisdom
                  </li>

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                    Meditation
                  </li>

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                    Yoga
                  </li>

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                    Sound Healing
                  </li>

                  <li className="hover:text-[#C56B2D] transition-colors duration-200 cursor-pointer">
                    Courses and Workshops
                  </li>                  

                </ul>

              </div>

            </li>


            <li className="uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] hover:text-[#C56B2D] transition-colors duration-300">

              PROGRAM CALENDAR

            </li>



            <li className="uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] hover:text-[#C56B2D] transition-colors duration-300">

              SOCIAL IMPACT

            </li>

          </ul>



          {/* Right Icons */}
          <div className="flex items-center gap-3 text-[#5E2A29]">

            <button className="hover:opacity-80 transition">

              <Search
                size={24}
                strokeWidth={2}
              />
            </button>

            <button className="lg:hidden hover:opacity-80 transition">

              <Menu
                size={30}
                strokeWidth={2}
              />

            </button>

          </div>

        </div>

      </nav>

    </header>
  );
}