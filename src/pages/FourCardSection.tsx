import type React from "react"
import { Truck, DollarSign, Shield, CreditCard } from "lucide-react"

const FourCardSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-16">
          Why buy from Meta
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 text-left">
            <div className="mb-6">
              <Truck className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Free 2-day delivery</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Jump into the excitement faster, with free 2-day shipping on Meta Quest and Ray-Ban Meta.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-left">
            <div className="mb-6">
              <DollarSign className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Free 30-day returns</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Change your mind? Return your product within 30 days with no shipping fees attached.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-left">
            <div className="mb-6">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Worry-free warranty</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Products that come with peace of mind. One-year warranty included.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-left">
            <div className="mb-6">
              <CreditCard className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Play now, pay later</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              When you finance with Affirm, you can dive into the action for as low as $19.99 USD/month.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourCardSection
