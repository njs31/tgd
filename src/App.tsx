import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
  Instagram,
  MapPin,
  Heart,
  Dumbbell,
  User,
  Zap,
  Lock,
  Droplets,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Crown,
  Users,
  Calendar,
  Star,
} from "lucide-react";

function App() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleGalleryItems, setVisibleGalleryItems] = useState<number[]>([]);
  const [visibleTrainers, setVisibleTrainers] = useState<number[]>([]);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const handleCall = () => {
    window.open("tel:08035568589", "_self");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com", "_blank");
  };

  const handleMaps = () => {
    window.open(
      "https://www.google.com/maps?q=The+Gym+Division,+589,+Vidyaranyapura+Main+Rd,+opposite+to+Corporation+Bank,+HMT+Layout+3rd+Block,+HMT+Layout,+Bengaluru,+Karnataka+560097&ftid=0x3bae231cab0aea4f:0x1abf445454a23c6b&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE1LjAuNzQ0OTgzNDA2MBgAINeCAypaLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJTg%3D%3D&skid=597ef49e-cdd7-4ca1-9619-bfb64d07bfd6&g_st=com.google.maps.preview.copy",
      "_blank"
    );
  };

  const openPricingModal = () => {
    setShowPricingModal(true);
    document.body.style.overflow = "hidden";
  };

  const closePricingModal = () => {
    setShowPricingModal(false);
    document.body.style.overflow = "unset";
  };

  const handleBuyNow = () => {
    window.open("https://rzp.io/rzp/KAVEASL", "_blank");
  };

  const services = [
    {
      icon: Heart,
      title: "Cardio Zone",
      description:
        "Latest cardio equipment including treadmills, bikes, and ellipticals",
      gradient: "from-gray-900/20 to-gray-800/10",
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Comprehensive free weights area and strength machines",
      gradient: "from-gray-900/20 to-gray-800/10",
    },
    {
      icon: User,
      title: "Personal Training",
      description: "Expert trainers available for personalized workout plans",
      gradient: "from-gray-900/20 to-gray-800/10",
    },
    {
      icon: Zap,
      title: "Functional Training",
      description: "Dedicated area for CrossFit and functional workouts",
      gradient: "from-gray-900/20 to-gray-800/10",
    },
    {
      icon: Lock,
      title: "Locker Rooms",
      description: "Clean and spacious locker rooms with shower facilities",
      gradient: "from-gray-900/20 to-gray-800/10",
    },
    {
      icon: Droplets,
      title: "Steam",
      description: "Relaxing steam rooms for post-workout recovery",
      gradient: "from-gray-900/20 to-gray-800/10",
    },
  ];

  // Gallery images - Using high-quality gym photos from Pexels
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern gym equipment",
      height: "h-64 sm:h-72 lg:h-80",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Weight training area",
      height: "h-48 sm:h-56 lg:h-64",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Cardio equipment zone",
      height: "h-72 sm:h-80 lg:h-96",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Free weights section",
      height: "h-56 sm:h-64 lg:h-72",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Functional training area",
      height: "h-64 sm:h-72 lg:h-80",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Group training space",
      height: "h-48 sm:h-56 lg:h-64",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Premium gym interior",
      height: "h-80 sm:h-88 lg:h-104",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1552105/pexels-photo-1552105.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Strength equipment",
      height: "h-52 sm:h-60 lg:h-68",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1552107/pexels-photo-1552107.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern fitness facility",
      height: "h-68 sm:h-76 lg:h-84",
    },
  ];

  // Personal Trainers Data
  const trainers = [
    {
      id: 1,
      name: "Deepak",
      image:
        "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
      instagram: "https://www.instagram.com/deepakgowdru/",
      specialty: "Strength & Conditioning",
      experience: "8+ Years",
    },
    {
      id: 2,
      name: "Puneeth",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      instagram: "https://www.instagram.com/d_muscle_architect/",
      specialty: "Functional Training",
      experience: "6+ Years",
    },
    {
      id: 3,
      name: "Melvin",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      instagram: "https://www.instagram.com/beard_melvin/",
      specialty: "CrossFit & HIIT",
      experience: "7+ Years",
    },
    {
      id: 4,
      name: "Likhith",
      image:
        "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600",
      instagram: "https://www.instagram.com/likhith_murthy/",
      specialty: "Bodybuilding",
      experience: "5+ Years",
    },
    {
      id: 5,
      name: "Suber",
      image:
        "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
      instagram: "https://instagram.com/suber_fitness",
      specialty: "Weight Loss & Nutrition",
      experience: "9+ Years",
    },
  ];

  // Pricing Data
  const pricingPlans = {
    personal: [
      {
        sessions: "12 Sessions",
        price: "₹10,000",
        popular: false,
      },
      {
        sessions: "18 Sessions",
        price: "₹12,000",
        popular: true,
      },
      {
        sessions: "25 Sessions",
        price: "₹14,000",
        popular: false,
      },
    ],
    gym: [
      {
        duration: "1 Month",
        price: "₹3,000",
        popular: false,
      },
      {
        duration: "3 Months",
        price: "₹5,000",
        popular: false,
      },
      {
        duration: "6 Months",
        price: "₹8,999",
        popular: true,
      },
      {
        duration: "12 Months",
        price: "₹11,999",
        popular: false,
      },
    ],
    couple: [
      {
        duration: "12 Months",
        price: "₹19,000",
        popular: true,
      },
    ],
  };

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(galleryImages[newIndex].id);
  };

  const handleTrainerInstagram = (instagramUrl: string) => {
    window.open(instagramUrl, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(
              entry.target.getAttribute("data-gallery-index") || "0"
            );
            setVisibleGalleryItems((prev) => [...prev, itemIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const trainerIndex = parseInt(
              entry.target.getAttribute("data-trainer-index") || "0"
            );
            setVisibleTrainers((prev) => [...prev, trainerIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const trainerCards = document.querySelectorAll(".trainer-card");
    trainerCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  // Handle keyboard navigation for pricing modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showPricingModal && e.key === "Escape") {
        closePricingModal();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [showPricingModal]);

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grey gradients for awwwards feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black opacity-90 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-gray-800/40 via-transparent to-transparent blur-2xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-gray-700/30 via-transparent to-transparent blur-2xl opacity-50 pointer-events-none"></div>
      </div>

      {/* Contact Icons - Top Right of Hero Section */}
      <div className="fixed top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-50">
        <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-4">
          {/* Call Button */}
          <button
            onClick={handleCall}
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg text-gray-300 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:from-gray-700/90 hover:to-gray-800/90 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />

            {/* Tooltip */}
            <div className="absolute top-1/2 right-full mr-3 sm:mr-4 transform -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm text-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700/50 pointer-events-none">
              Call: 08035568589
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800"></div>
            </div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          {/* Instagram Button */}
          <button
            onClick={handleInstagram}
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg text-gray-300 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:from-gray-700/90 hover:to-gray-800/90 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
          >
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />

            {/* Tooltip */}
            <div className="absolute top-1/2 right-full mr-3 sm:mr-4 transform -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm text-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700/50 pointer-events-none">
              Instagram
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800"></div>
            </div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          {/* Maps Button */}
          <button
            onClick={handleMaps}
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg text-gray-300 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:from-gray-700/90 hover:to-gray-800/90 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />

            {/* Tooltip */}
            <div className="absolute top-1/2 right-full mr-3 sm:mr-4 transform -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm text-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700/50 pointer-events-none">
              Location
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800"></div>
            </div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Vertical Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-600/10 via-gray-500/5 to-gray-600/10 rounded-2xl sm:rounded-3xl blur-xl opacity-50 -z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex items-center justify-center min-h-screen sm:min-h-[80vh] bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto text-center flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Main Gym Name - Inspired by Logo */}
            <div className="mb-4 sm:mb-8 lg:mb-10 flex flex-col items-center justify-center relative gap-3 sm:gap-5 lg:gap-7">
              <div
                className="text-white text-xs sm:text-sm md:text-base tracking-[0.4em] font-light uppercase"
                style={{ letterSpacing: "0.4em" }}
              >
                THE
              </div>
              <div
                className="text-white font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none"
                style={{ fontFamily: "sans-serif" }}
              >
                Gym
              </div>
              <div
                className="text-white font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none"
                style={{ fontFamily: "sans-serif" }}
              >
                Division
              </div>
            </div>

            {/* Tagline - Responsive Typography */}
            <div className="mb-2 sm:mb-6 lg:mb-8">
              <div className="relative">
                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-[0.2em] uppercase mb-1 sm:mb-2">
                  Not Just
                </p>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-[0.2em] uppercase mb-1 sm:mb-2">
                  A Gym
                </p>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-[0.15em] uppercase">
                  A Movement
                </p>
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
            </div>

            {/* Description - Responsive */}
            <div className="mb-2 sm:mb-6 lg:mb-8 px-2 sm:px-0">
              <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl sm:max-w-2xl mx-auto font-light">
                Transform your body, elevate your mind, and join a community
                dedicated to pushing beyond limits. This is where legends are
                forged.
              </p>
            </div>

            {/* CTA Button - Responsive */}
            <div className="flex justify-center">
              <button
                onClick={openPricingModal}
                className="group relative inline-flex items-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 font-medium text-base sm:text-lg tracking-wide rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700/50 hover:from-gray-700 hover:to-gray-800 hover:text-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Button Shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
              </button>
            </div>

            {/* Stats Section - Responsive Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mb-1 sm:mb-2">
                  5K+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">
                  Members
                </div>
              </div>
              <div className="text-center border-l border-r border-gray-800/50">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">
                  Trainers
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mb-1 sm:mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">
                  Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-300 mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  WHAT WE
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  OFFER
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto font-light">
              Experience world-class facilities designed to elevate your fitness
              journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`service-card group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-gray-600/50 transition-all duration-700 transform ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 sm:mb-8">
                      <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />

                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-400 transition-colors duration-300 font-light">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-6 sm:mt-8 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                    </div>
                  </div>

                  {/* Card Border Glow */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-600/10 via-gray-500/5 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                  {/* Floating Particles Effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-gray-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:animate-pulse"></div>
                </div>
              );
            })}
          </div>

          {/* Explore Pricing Button */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <button
              onClick={openPricingModal}
              className="group relative inline-flex items-center px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 font-medium text-base sm:text-lg tracking-wide rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700/50 hover:from-gray-700 hover:to-gray-800 hover:text-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
            >
              <span className="relative z-10 flex items-center">
                Explore Pricing
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Button Shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
            </button>
          </div>

          {/* Bottom Accent */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600 text-sm sm:text-base font-light">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="tracking-wider uppercase">
                Premium Facilities
              </span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Trainers Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-300 mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  OUR PERSONAL
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  TRAINERS
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto font-light">
              Meet our certified fitness experts dedicated to helping you
              achieve your goals
            </p>
          </div>

          {/* Trainers Marquee */}
          <div className="relative overflow-x-hidden overflow-y-hidden py-2">
            <div className="flex gap-8 whitespace-nowrap flex-nowrap w-max animate-marquee">
              <style>{`
                .animate-marquee {
                  animation: marquee 10s linear infinite;
                }
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
              {trainers.concat(trainers).map((trainer, index, arr) => (
                <React.Fragment key={index}>
                  <div className="trainer-card group relative min-w-[260px] max-w-xs w-[90vw] sm:w-72 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-gray-600/50 transition-all duration-700 transform hover:scale-105 mx-2">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-800/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Trainer Image */}
                      <div className="mb-6 sm:mb-8">
                        <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500">
                          <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          {/* Instagram Button Overlay */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <button
                              onClick={() =>
                                handleTrainerInstagram(trainer.instagram)
                              }
                              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-300 hover:text-gray-200 hover:from-gray-700/90 hover:to-gray-800/90 transition-all duration-300 transform hover:scale-110"
                            >
                              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                          </div>
                          {/* Image Border Glow */}
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-600/10 via-gray-500/5 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                        </div>
                      </div>
                      {/* Trainer Info */}
                      <div className="text-center">
                        {/* Name */}
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors duration-300">
                          {trainer.name}
                        </h3>
                        {/* Specialty */}
                        <p className="text-gray-500 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 group-hover:text-gray-400 transition-colors duration-300 font-medium">
                          {trainer.specialty}
                        </p>
                        {/* Experience */}
                        <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-500 transition-colors duration-300 font-light">
                          {trainer.experience}
                        </p>
                        {/* Instagram Link Button */}
                        <div className="mt-4 sm:mt-6">
                          <button
                            onClick={() =>
                              handleTrainerInstagram(trainer.instagram)
                            }
                            className="group/btn inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-300 text-sm font-medium rounded-xl border border-gray-700/50 hover:from-gray-700/80 hover:to-gray-800/80 hover:text-gray-200 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
                          >
                            <Instagram className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>Follow</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Card Border Glow */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-700/10 via-gray-500/5 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                    {/* Floating Particles Effect */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-gray-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
                    <div className="absolute bottom-6 right-6 w-1 h-1 bg-gray-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:animate-pulse"></div>
                  </div>
                  {/* Add white dot after the last card */}
                  {index === arr.length - 1 && (
                    <div className="flex items-center justify-center min-w-[40px] mx-2">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600 text-sm sm:text-base font-light">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="tracking-wider uppercase">Expert Guidance</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-300 mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  OUR
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  GALLERY
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto font-light">
              Take a visual tour of our state-of-the-art facilities and premium
              equipment
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
            {galleryImages.map((image, index) => {
              const isVisible = visibleGalleryItems.includes(index);

              return (
                <div
                  key={image.id}
                  data-gallery-index={index}
                  className={`gallery-item group relative break-inside-avoid cursor-pointer transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  onClick={() => openLightbox(image.id)}
                >
                  <div
                    className={`relative ${image.height} rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-500`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-2 flex items-center space-x-2">
                        <Camera className="h-4 w-4 text-gray-300" />
                        <span className="text-gray-300 text-sm font-medium">
                          View Image
                        </span>
                      </div>
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-600/10 via-gray-500/5 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Accent */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600 text-sm sm:text-base font-light">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="tracking-wider uppercase">
                Premium Experience
              </span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closePricingModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-[90vh] w-full overflow-y-auto">
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              {/* Modal Header */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-300 mb-4 sm:mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                    PRICING
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    PLANS
                  </span>
                </h2>
                <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto font-light">
                  Choose the perfect plan to start your fitness transformation
                </p>
              </div>

              {/* Personal Training Section */}
              <div className="mb-12 sm:mb-16">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                      PERSONAL TRAINING
                    </h3>
                    <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base font-medium bg-gray-700/20 border border-gray-600/30 rounded-xl px-4 py-2 inline-block">
                    1 Month Membership Free
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {pricingPlans.personal.map((plan, index) => (
                    <div
                      key={index}
                      className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                        plan.popular
                          ? "border-gray-500/50 ring-2 ring-gray-700/30"
                          : "border-gray-700/50 hover:border-gray-600/50"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 border border-gray-600/40">
                            <Star className="h-4 w-4 text-gray-400" />
                            <span>POPULAR</span>
                          </div>
                        </div>
                      )}

                      <div className="text-center">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-300 mb-4">
                          {plan.sessions}
                        </h4>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-200 mb-6">
                          {plan.price}
                        </div>
                        <button
                          onClick={handleBuyNow}
                          className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-200 font-bold py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gym Memberships Section */}
              <div className="mb-12 sm:mb-16">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                      GYM MEMBERSHIPS
                    </h3>
                    <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {pricingPlans.gym.map((plan, index) => (
                    <div
                      key={index}
                      className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                        plan.popular
                          ? "border-gray-500/50 ring-2 ring-gray-700/30"
                          : "border-gray-700/50 hover:border-gray-600/50"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 border border-gray-600/40">
                            <Star className="h-4 w-4 text-gray-400" />
                            <span>POPULAR</span>
                          </div>
                        </div>
                      )}

                      <div className="text-center">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-300 mb-2">
                          {plan.duration}
                        </h4>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-200 mb-2">
                          {plan.price}
                        </div>
                        <p className="text-gray-500 text-sm mb-6">
                          (Incl. GST)
                        </p>
                        <button
                          onClick={handleBuyNow}
                          className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-200 font-bold py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Couple Memberships Section */}
              <div className="mb-8 sm:mb-12">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                      COUPLE MEMBERSHIPS
                    </h3>
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    {pricingPlans.couple.map((plan, index) => (
                      <div
                        key={index}
                        className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 ring-2 ring-gray-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                      >
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 border border-gray-600/40">
                            <Star className="h-4 w-4 text-gray-400" />
                            <span>BEST VALUE</span>
                          </div>
                        </div>

                        <div className="text-center">
                          <h4 className="text-xl sm:text-2xl font-bold text-gray-300 mb-2">
                            {plan.duration}
                          </h4>
                          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-200 mb-2">
                            {plan.price}
                          </div>
                          <p className="text-gray-500 text-sm mb-6">
                            (Incl. GST)
                          </p>
                          <button
                            onClick={handleBuyNow}
                            className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-200 font-bold py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closePricingModal}
          ></div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700/50 rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className="max-w-full max-h-full object-contain rounded-2xl sm:rounded-3xl shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-2">
              <p className="text-gray-300 text-sm font-medium text-center">
                {selectedImageData.alt}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox}></div>
        </div>
      )}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-black to-transparent"></div>

      {/* Responsive Google Map Embed */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-8 pb-12">
        <div className="w-full aspect-[3/2] sm:aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl border border-gray-800/60 bg-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4179.781690612249!2d77.55971459999999!3d13.081044200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae231cab0aea4f%3A0x1abf445454a23c6b!2sThe%20Gym%20Division!5e1!3m2!1sen!2sin!4v1751895281321!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="The Gym Division Location"
          ></iframe>
        </div>
      </div>

      {/* Responsive Footer */}
      <footer className="relative z-20 w-full bg-black border-t border-gray-800/60 px-4 sm:px-8 py-8 sm:py-12 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0">
          {/* Left: Hours & Days */}
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="text-gray-400 text-lg sm:text-xl font-bold tracking-wide mb-1">
              Opening Hours
            </div>
            <div className="text-gray-300 text-2xl sm:text-3xl font-black mb-1">
              5 a.m - 10:30 p.m
            </div>
            <div className="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">
              Everyday
            </div>
          </div>
          {/* Center: Address */}
          <div className="flex-1 text-center flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-gray-300 text-base sm:text-lg font-medium">
                589, Vidyaranyapura Main Rd
              </span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base font-light">
              HMT Layout, Bengaluru, Karnataka 560097
            </div>
          </div>
          {/* Right: Email */}
          <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-block bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full p-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6"
                  />
                </svg>
              </span>
              <a
                href="mailto:teamgymdivision@gmail.com"
                className="text-gray-300 text-base sm:text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
              >
                teamgymdivision@gmail.com
              </a>
            </div>
            <div className="text-gray-500 text-xs sm:text-sm font-light">
              Contact us for queries & memberships
            </div>
          </div>
        </div>
        {/* Bottom line */}
        <div className="mt-8 border-t border-gray-800/60 pt-4 text-center text-gray-600 text-xs sm:text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} The Gym Division. All rights
          reserved.
          <span className="mx-2">|</span>
          <button
            className="text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-200 underline underline-offset-2"
            onClick={() => {
              window.open(
                "https://wa.me/919900000000?text=Hey%20Ihve%20Visited%20the%20Website%20of%20The%20Gym%20Division%20and%20Iam%20Looking%20for%20a%20Web%20Developer%2C%20Can%20we%20talk%3F",
                "_blank"
              );
            }}
          >
            Built by JAI
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
