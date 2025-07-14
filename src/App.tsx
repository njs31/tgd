import React, { useState, useEffect, useRef } from "react";
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
  const [trainersHeaderVisible, setTrainersHeaderVisible] = useState(false);
  const trainersHeaderRef = useRef<HTMLDivElement | null>(null);
  const [galleryHeaderVisible, setGalleryHeaderVisible] = useState(false);
  const galleryHeaderRef = useRef<HTMLDivElement | null>(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [visibleOfferCards, setVisibleOfferCards] = useState<number[]>([]);
  const [visibleTrainerCards, setVisibleTrainerCards] = useState<number[]>([]);
  const [visibleGalleryCards, setVisibleGalleryCards] = useState<number[]>([]);

  const handleCall = () => {
    window.open("tel:08035568589", "_self");
  };

  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/the_gymdivision?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank"
    );
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

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const galleryIndex = parseInt(
              entry.target.getAttribute("data-gallery-index") || "0"
            );
            setVisibleGalleryItems((prev) => [...prev, galleryIndex]);
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
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTrainersHeaderVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (trainersHeaderRef.current) {
      observer.observe(trainersHeaderRef.current);
    }
    return () => {
      if (trainersHeaderRef.current) {
        observer.unobserve(trainersHeaderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const galleryObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGalleryHeaderVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (galleryHeaderRef.current) {
      galleryObserver.observe(galleryHeaderRef.current);
    }
    return () => {
      if (galleryHeaderRef.current) {
        galleryObserver.unobserve(galleryHeaderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const footerObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }
    return () => {
      if (footerRef.current) {
        footerObserver.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const heroObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
    };
  }, []);

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  // Intersection Observer for WHAT WE OFFER cards
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-offer-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleOfferCards((prev) =>
              Array.from(new Set([...prev, index]))
            );
          } else {
            setVisibleOfferCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );
    const offerCards = document.querySelectorAll(".offer-card");
    offerCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for trainer cards
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-trainer-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleTrainerCards((prev) =>
              Array.from(new Set([...prev, index]))
            );
          } else {
            setVisibleTrainerCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );
    const trainerCards = document.querySelectorAll(".trainer-card");
    trainerCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for gallery items
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-gallery-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleGalleryCards((prev) =>
              Array.from(new Set([...prev, index]))
            );
          } else {
            setVisibleGalleryCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    // TEMPORARY: Website Down Overlay
    // The original content is commented out below for easy reversion.
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-300">
      <div className="flex flex-col items-center space-y-8">
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="10,10 40,60 70,30 100,70"
            stroke="#9ca3af"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="100" cy="70" r="6" fill="#ef4444" />
        </svg>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-200 mb-2 text-center">
          Website Down
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-md">
          We are currently experiencing issues. Please check back later.
        </p>
      </div>
    </div>
  );
  /*
  <div className="min-h-screen bg-black relative overflow-hidden text-gray-300">
    ...
  </div>
  */
}

export default App;
