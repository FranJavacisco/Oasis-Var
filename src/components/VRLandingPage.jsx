import React, { useState } from 'react';
import { Play, Menu, X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl mx-4">
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const VarAILanding = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  const videoId = "dQw4w9WgXcQ";
  const heroImages = ['images/vr-headset.png', 'images/vr-headset-alt.jpg'];

  return (
    <div className="min-h-screen bg-[#020B2D] text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xl font-semibold">Oasis</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Page</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Community</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#020B2D] z-10 pt-20">
          <div className="flex flex-col items-center gap-6 p-6">
            <a href="#" className="text-lg hover:text-blue-400">Home</a>
            <a href="#" className="text-lg hover:text-blue-400">Features</a>
            <a href="#" className="text-lg hover:text-blue-400">Page</a>
            <a href="#" className="text-lg hover:text-blue-400">Community</a>
            <a href="#" className="text-lg hover:text-blue-400">Support</a>
            <button className="bg-blue-600 px-6 py-2 rounded-lg w-full">
              Download App
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 pt-8 lg:pt-16 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left lg:pt-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-light mb-2">
                VIRTUAL
                <br />
                <span className="font-bold">REALITY</span>
              </h1>
              <p className="text-gray-400 mt-4 lg:mt-6 max-w-md mx-auto lg:mx-0">
                We specialize in cutting-edge virtual reality solutions that transcend the ordinary. Join us in creating extraordinary VR experiences that amaze the world.
              </p>
            </div>
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 mx-auto lg:mx-0">
              Read More
              <span className="text-sm">↗</span>
            </button>

            {/* Featured Design Section */}
            <div className="pt-8 lg:pt-16">
              <h2 className="text-xl lg:text-2xl mb-4">
                FEATURED
                <br />
                <span className="font-bold">DESIGN</span>
              </h2>
              <div className="bg-[#0A1438] rounded-xl p-3 inline-flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <span className="text-xl font-bold">578M+</span>
                  <br />
                  <span className="text-sm text-gray-400">Online Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative w-full lg:w-[80%] mt-8 lg:mt-0">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src={isHovered ? heroImages[1] : heroImages[0]}
                alt="VR Headset"
                className="w-full h-auto transition-all duration-500 ease-in-out"
                style={{
                  mask: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  WebkitMask: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-[#020B2D] opacity-50"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-0 right-0 text-right hidden lg:block">
              <div className="mb-2">
                <div className="text-2xl font-bold">3,740+</div>
                <div className="text-sm text-gray-400">Our User Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold">592K</div>
                <div className="text-sm text-gray-400">Transaction</div>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="flex justify-between mt-4 mb-6 lg:hidden">
              <div className="text-center">
                <div className="text-xl font-bold">3,740+</div>
                <div className="text-xs text-gray-400">Our User Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">592K</div>
                <div className="text-xs text-gray-400">Transaction</div>
              </div>
            </div>

            {/* Watch Now Card with Video Modal Trigger */}
            <div 
              className="absolute bottom-4 right-0 lg:bottom-20 bg-[#0A1438] rounded-xl p-4 w-40 lg:w-48 hover:bg-[#0C1845] transition-colors cursor-pointer group"
              onClick={() => setVideoModalOpen(true)}
            >
              <div className="relative">
                <img 
                  src="images/vr-user.avif" 
                  alt="VR User" 
                  className="w-full h-24 lg:h-32 object-cover rounded-lg mb-2"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <Play 
                      size={24} 
                      fill="white"
                      className="text-white ml-1"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center text-sm font-semibold">WATCH NOW!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoId={videoId}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default VarAILanding;