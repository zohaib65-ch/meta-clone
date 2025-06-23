import type React from "react"
import facebook from "../assets/svg/facebook.svg"
import instagram from "../assets/svg/instagram.svg"
import youtube from "../assets/svg/youtube.svg"
import thrad from "../assets/svg/thrad.svg"
import x from "../assets/svg/x.svg"
import logo from "../assets/svg/logo.svg"
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-blue-600">
                <img src={logo || "/placeholder.svg"} alt="Meta Logo" className="h-4" />
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src={facebook || "/placeholder.svg"} alt="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src={thrad || "/placeholder.svg"} alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src={instagram || "/placeholder.svg"} alt="instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src={x || "/placeholder.svg"} alt="X" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src={youtube || "/placeholder.svg"} alt="YouTube" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Meta Store */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 ">Meta Store</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Ray-Ban Meta glasses
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Quest
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Apps and games
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Quest gift cards
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Refurbished Meta Quest 3
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Refurbished Meta Quest 3S
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Refurbished Ray-Ban Meta glasses
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  More from Ray-Ban
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Quest: Play now. Pay later.
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Warranty Plus
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta for Work
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta for Education
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Quest referrals
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Education discount
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 mb-0">Community</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Creators
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Businesses
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Non-profits
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Download SDKs
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Made for Meta partner program
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  VR for Good
                </a>
              </li>
            </ul>

            <h3 className="text-xs font-semibold text-gray-900 mb-0 mt-8">Our actions</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Data and privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Responsible business practices
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Elections
                </a>
              </li>
            </ul>
          </div>

          {/* About us */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 ">About us</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  About Meta
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Media gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Brand resources
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  For investors
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Newsroom
                </a>
              </li>
            </ul>

            <h3 className="text-xs font-semibold text-gray-900  mt-8">Site terms and policies</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Community standards
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>

          {/* Store support and App support */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 ">Store support and legal</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Order status
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Find a product demo
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Authorized retailers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Terms of sale
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Quest safety center
                </a>
              </li>
            </ul>

            <h3 className="text-xs font-semibold text-gray-900  mt-8">App support</h3>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Facebook Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Messenger Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Instagram Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  WhatsApp Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Workplace Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Meta Verified
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left side - Country/Language */}
            <div className="lg:col-span-1">
              <p className="text-xs text-gray-600">
                <a href="#" className="underline hover:no-underline">
                  United States (English)
                </a>
              </p>
            </div>

            {/* Right side - Legal content */}
            <div className="lg:col-span-3">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
