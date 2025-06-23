import { CustomButton } from "../components/custom-button";
import girlImage from "../assets/girl-img.webp";
import batmanImage from "../assets/batman-img.webp";
import manImg from "../assets/man-img.jpg";
import metaQuest from "../assets/meta-quest.webp";

export default function BlogPage() {
  return (
    <div>
      <div className=" bg-white my-16">
        <div className="max-w-7xl p-4 mx-auto space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
            <div className="md:col-span-3 bg-blue-950 text-white p-6 rounded-2xl h-48 flex flex-col justify-end">
              <h2 className="text-xl font-bold mb-3">Expériences 3D</h2>
              <p className="text-blue-100 text-sm leading-relaxed">Des contenus interactifs et immersifs pour nos utilisateurs</p>
            </div>
            <div className="md:col-span-7 bg-blue-950 text-white p-6 rounded-2xl h-48 flex flex-col justify-end">
              <h2 className="text-xl font-bold mb-3">Intranet & Infrastructure Sécurisée</h2>
              <p className="text-blue-100 text-sm leading-relaxed">Des environnements internes robustes pour une collaboration d'équipe fluide, sûre et performante.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
            <div className="md:col-span-7 bg-blue-950 text-white p-6 rounded-2xl h-48 flex flex-col justify-end">
              <h2 className="text-xl font-bold mb-3">Intelligence Artificielle & Automatisation</h2>
              <p className="text-blue-100 text-sm leading-relaxed">L'IA s'avère être un acteur majeur dans le monde numérique. DIGITALY deviendra au long terme un acteur majeur dans le domaine.</p>
            </div>
            <div className="md:col-span-3 bg-blue-950 text-white p-6 rounded-2xl h-48 flex flex-col justify-end">
              <h2 className="text-xl font-bold mb-3">SaaS & Applications</h2>
              <p className="text-blue-100 text-sm leading-relaxed">Des plateformes pensées pour accompagner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-row gap-6 p-2 sm:p-4 max-w-7xl my-16 mx-auto">
        <div className="relative flex-1 rounded-3xl overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${manImg})`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
            <div className="text-white">
              <p className="text-base sm:text-md text-center">Meta Quest</p>
              <h2 className="text-3xl sm:text-4xl text-center font-medium mb-1">Meta Quest 3S brings the magic of mixed reality</h2>
              <p className="text-base sm:text-md mb-6 text-center">Get three months of Meta Horizon+ when you buy a Quest 3S.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton variant="primary" className="text-xs px-3 py-2">
                  Buy Meta Quest 3S
                </CustomButton>
                <CustomButton variant="secondary" className="text-xs px-3 py-2">
                  Learn more
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-2 sm:p-4 max-w-7xl mx-auto ">
        <div className="relative flex-1 rounded-3xl overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${girlImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
            <div className="text-white">
              <div className="flex justify-center">
                <img src={metaQuest} className="sm:w-28" />
              </div>

              <h2 className="text-3xl sm:text-4xl text-center font-medium mb-1">
                Sit courtside from <br />
                anywhere
              </h2>
              <p className="text-base sm:text-md mb-6 text-center opacity-90">Turn any space into an NBA arena with 52 live games and on-demand highlights.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CustomButton variant="primary" className="text-xs px-5 py-2 border-0">
                  Learn more
                </CustomButton>
                <CustomButton variant="secondary" className="text-xs px-5 py-2 border-0">
                  View schedule
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 rounded-3xl overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${batmanImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
            <div className="text-white">
              <p className="text-base sm:text-md text-center">Meta Quest</p>
              <h2 className="text-3xl sm:text-4xl text-center font-medium mb-1">Become Batman</h2>
              <p className="text-base sm:text-md mb-6 text-center">Batman: Arkham Shadow is included with the purchase of Meta Quest 3 and Meta Quest 3S.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CustomButton variant="primary" className="text-xs px-3 py-2">
                  Shop Meta Quest
                </CustomButton>
                <CustomButton variant="secondary" className="text-xs px-5 py-2 border-0">
                  Learn more
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
