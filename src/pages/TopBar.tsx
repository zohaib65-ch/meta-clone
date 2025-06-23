import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart, User, Globe, Menu, X, ChevronDown } from "lucide-react";
import Whitelogo from "../assets/svg/logo-white.svg";
import Skyler from "../assets/Skyler.png";

const menuItems = [
  {
    label: "Expertises",
    key: "expertise",
    desktopContent: {
      layout: "grid grid-cols-5 gap-8",
      content: [
        {
          type: "links",
          items: ["Ray-Ban Meta overview", "Shop all", "Wayfarer", "Skyler", "Headliner"],
        },
        {
          type: "links",
          items: ["Charging Case", "Certified refurbished"],
        },
        ...["Wayfarer", "Skyler", "Headliner"].map((item) => ({
          type: "product",
          image: Skyler || "/placeholder.svg",
          alt: item,
          description: "Ray-Ban Meta",
          buttonText: `Shop ${item}`,
        })),
      ],
    },
    mobileContent: {
      layout: "space-y-2",
      content: [
        {
          type: "links",
          items: ["Ray-Ban Meta overview", "Shop all", "Wayfarer", "Skyler", "Headliner", "Charging Case", "Certified refurbished"],
        },
      ],
    },
  },
  {
    label: "Solutions",
    key: "solution",
    desktopContent: {
      layout: "grid grid-cols-4 gap-8",
      content: [
        {
          type: "links",
          items: ["Meta Quest overview", "Meta Quest 3S", "Meta Quest 3", "Compare devices"],
        },
        {
          type: "links",
          items: ["Accessories", "Play now. Pay later.", "Meta Warranty Plus", "Gift cards"],
        },
        ...["Meta Quest 3", "Meta Quest 3S"].map((item) => ({
          type: "product",
          image: Skyler || "/placeholder.svg",
          alt: item,
          buttonText: `Shop ${item}`,
        })),
      ],
    },
    mobileContent: {
      layout: "space-y-2",
      content: [
        {
          type: "links",
          items: ["Meta Quest overview", "Meta Quest 3S", "Meta Quest 3", "Compare devices", "Accessories", "Play now. Pay later.", "Meta Warranty Plus", "Gift cards"],
        },
      ],
    },
  },
  {
    label: "Applications",
    key: "applications",
    desktopContent: {
      layout: "grid grid-cols-2 gap-8 max-w-md",
      content: [
        {
          type: "links",
          items: ["Shop all", "Gaming", "Entertainment", "Fitness", "Social"],
        },
        {
          type: "links",
          items: ["Family", "Productivity", "Mixed reality", "Meta Horizon+"],
        },
      ],
    },
    mobileContent: {
      layout: "space-y-2",
      content: [
        {
          type: "links",
          items: ["Shop all", "Gaming", "Entertainment", "Fitness", "Social", "Family", "Productivity", "Mixed reality", "Meta Horizon+"],
        },
      ],
    },
  },
  {
    label: "Découvrir GULHAZ ",
    key: "découvrirDIGITALY",
    desktopContent: {
      layout: "grid grid-cols-3 max-w-4xl",
      content: [
        {
          type: "section",
          title: "Apps",
          items: ["Facebook", "Messenger", "Instagram", "WhatsApp", "Meta Horizon", "Threads"],
        },
        {
          type: "section",
          title: "Services",
          items: ["Meta AI", "AI Studio", "Llama", "Meta Pay", "Meta Verified"],
        },
        {
          type: "section",
          title: "Community",
          items: ["About Meta", "Businesses", "Creators", "Developers", "Educators", "Researchers", "Newsroom"],
        },
      ],
    },
    mobileContent: {
      layout: "space-y-2",
      content: [
        {
          type: "section",
          title: "Apps",
          items: ["Facebook", "Messenger", "Instagram", "WhatsApp", "Meta Horizon", "Threads"],
        },
        {
          type: "section",
          title: "Services",
          items: ["Meta AI", "AI Studio", "Llama", "Meta Pay", "Meta Verified"],
        },
        {
          type: "section",
          title: "Community",
          items: ["About Meta", "Businesses", "Creators", "Developers", "Educators", "Researchers", "Newsroom"],
        },
      ],
    },
  },
  {
    label: "Assistance",
    key: "assistance",
    desktopContent: {
      layout: "grid grid-cols-3 gap-12 max-w-5xl",
      content: [
        {
          type: "section",
          title: "Store and Device Help Centers",
          items: ["Find order", "Meta Quest and Quest Pro", "AI Glasses", "Meta Portal"],
        },
        {
          type: "section",
          title: "Meta Help Center",
          items: ["Accounts Center", "Meta Pay", "Policies", "Connected Experiences"],
        },
        {
          type: "section",
          title: "App Help Centers",
          items: ["Meta Horizon", "Facebook", "Messenger", "Instagram", "WhatsApp", "Workplace"],
        },
      ],
    },
    mobileContent: {
      layout: "space-y-2",
      content: [
        {
          type: "section",
          title: "Store and Device Help Centers",
          items: ["Find order", "Meta Quest and Quest Pro", "AI Glasses", "Meta Portal"],
        },
        {
          type: "section",
          title: "Meta Help Center",
          items: ["Accounts Center", "Meta Pay", "Policies", "Connected Experiences"],
        },
        {
          type: "section",
          title: "App Help Centers",
          items: ["Meta Horizon", "Facebook", "Messenger", "Instagram", "WhatsApp", "Workplace"],
        },
      ],
    },
  },
];

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent text-white");
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const timeoutRefs = useRef<Record<string, number | null>>({});

  const handleMouseEnter = (key: string) => {
    if (timeoutRefs.current[key]) clearTimeout(timeoutRefs.current[key]);
    setOpenDropdowns((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    timeoutRefs.current[key] = setTimeout(() => {
      setOpenDropdowns((prev) => ({ ...prev, [key]: false }));
    }, 150);
  };

  const handleToggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
      if (scrolled) {
        setBgColor("bg-black text-white");
      } else {
        setBgColor("bg-transparent text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Object.values(timeoutRefs.current).forEach((timeout) => timeout && clearTimeout(timeout));
    };
  }, []);

  const renderContent = (content: any[], isMobile = false) => (
    <>
      {content.map((section, idx) => (
        <div key={idx} className={section.type === "section" ? "space-y-3" : ""}>
          {section.type === "section" && <h3 className="text-sm font-medium text-gray-500 mb-2">{section.title}</h3>}
          {(section.type === "links" || section.type === "section") && (
            <div className={section.type === "links" ? "space-y-4" : "space-y-3"}>
              {section.items.map((item: string) => (
                <a key={item} href="#" className="block text-sm text-gray-900 font-medium hover:bg-gray-400 hover:text-gray-900 rounded-full px-2 py-1">
                  {item}
                </a>
              ))}
            </div>
          )}
          {section.type === "product" && !isMobile && (
            <div className="text-center">
              <img src={section.image || "/placeholder.svg"} alt={section.alt} className="w-40 h-30 mx-auto" />
              {section.description && <p className="text-sm text-gray-600 mb-2">{section.description}</p>}
              <button className="text-sm font-medium text-gray-900 hover:bg-gray-400 hover:text-gray-900 rounded-full px-2 py-1">{section.buttonText}</button>
            </div>
          )}
        </div>
      ))}
    </>
  );

  const renderDropdown = (item: (typeof menuItems)[0], isMobile = false) => (
    <div className={isMobile ? "relative" : "relative"} onMouseEnter={isMobile ? undefined : () => handleMouseEnter(item.key)} onMouseLeave={isMobile ? undefined : () => handleMouseLeave(item.key)}>
      <button
        className={`text-sm px-4 py-0.5 flex items-center ${
          isMobile
            ? "block w-full text-left text-gray-900 font-medium hover:bg-gray-400 rounded-full"
            : `border border-transparent  hover:border-white rounded-full hover:bg-white hover:text-black transition duration-200`
        }`}
        onClick={() => handleToggleDropdown(item.key)}
      >
        {item.label}
        {isMobile && <ChevronDown size={14} className="ml-1" />}
      </button>
      {openDropdowns[item.key] && (
        <div className={isMobile ? "pl-4 mt-2 space-y-2" : "fixed left-0 right-0 top-16 w-full bg-gray-100 border-t border-gray-200 shadow-lg z-40"}>
          <div className={isMobile ? "" : "max-w-7xl mx-auto px-8 py-8"}>
            <div className={isMobile ? item.mobileContent.layout : item.desktopContent.layout}>{renderContent(isMobile ? item.mobileContent.content : item.desktopContent.content, isMobile)}</div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor} ${isScrolled ? "backdrop-blur-xl border-b border-gray-200/50" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <img src={Whitelogo || "/placeholder.svg"} alt="Meta Logo" className="h-3" />
              {menuItems.slice(0, 3).map((item) => renderDropdown(item))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.slice(3).map((item) => renderDropdown(item))}
            <button className="hover:text-gray-400">
              <Search size={20} />
            </button>
            <div className="flex items-center space-x-1 text-sm">
              <Globe size={16} />
              <span>US</span>
            </div>
            <button className="hover:text-gray-400">
              <ShoppingCart size={20} />
            </button>
            <button className="hover:text-gray-400">
              <User size={20} />
            </button>
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
            <img src={Whitelogo || "/placeholder.svg"} alt="Meta Logo" className="h-3" />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-gray-400">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg py-9 rounded-lg">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {menuItems.map((item) => renderDropdown(item, true))}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex items-center space-x-4 mt-7">
                <button className="text-gray-600 hover:text-gray-900">
                  <Search size={20} />
                </button>
                <div className="flex items-center space-x-1 text-sm text-gray-700">
                  <Globe size={16} />
                  <span>US</span>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  <ShoppingCart size={20} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <User size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopBar;
