import Img from "../assets/demo-image.webp";

export default function ShopPage() {
  return (
    <div className="relative max-w-7xl p-4 sm:mt-8 lg:mt-20 mx-auto space-y-3 ">
      <div className="absolute left-8 -top-7 z-10 lg:left-12 hidden lg:block">
        <img src={Img || "/placeholder.svg"} alt="Professional holding smartphone" width={405} height={460} className="object-cover rounded-lg" />
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden mt-20 lg:mt-24">
        <div className="flex flex-col lg:flex-row items-center min-h-[350px]">
          <div className="lg:w-2/5 w-full"></div>
          <div className="lg:w-3/5 w-full p-8 lg:pl-4 lg:pr-12">
            <div className="text-white">
              <blockquote className="text-xl font-thin leading-relaxed mb-8">
                <span className="text-2xl">'</span>
                We're passionate about our clients' success, and pride ourselves on delivering results that have a positive impact on their business. Whether you're looking to increase sales, drive
                more traffic to your website, or improve your online presence, <span className="font-bold">GULHAZ</span> is here to help you
                <span className="text-2xl">'</span>
              </blockquote>

              <div className="text-right">
                <div className="text-2xl lg:text-3xl font-bold mb-2">Zohaib</div>
                <div className="text-blue-200 text-lg italic">Managing Director GULHAZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
