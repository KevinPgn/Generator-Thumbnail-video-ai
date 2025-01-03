import { RoughNotation } from "react-rough-notation";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      {/* Trust Badge */}
      <div className="mb-8 bg-neutral-100 rounded-full px-4 py-1.5 text-sm text-neutral-600">
        Faites confiance à l'IA pour vos thumbnails
      </div>
      
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        Génération de Thumbnails{" "}<br />
        <RoughNotation 
          type="underline" 
          show={true} 
          color="#FF0000"
          strokeWidth={2}
        >
          propulsée par l'IA
        </RoughNotation>
      </h1>
      
      {/* Subheading */}
      <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
        Créez des thumbnails accrocheurs pour vos vidéos YouTube et Twitter en quelques secondes. Générez jusqu'à 4 variations uniques par utilisation.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex gap-4">
        <a
          href="/generate"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Commencer maintenant
        </a>
        <a
          href="#features"
          className="px-6 py-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          En savoir plus
        </a>
      </div>
      
      {/* Features Badge */}
      <div className="mt-12 flex items-center gap-x-6 text-sm text-neutral-600">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Jusqu'à 4 images
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Génération rapide
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          2 utilisations gratuites
        </div>
      </div>
    </div>
  );
};