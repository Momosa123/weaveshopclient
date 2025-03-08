export default function Newsletter() {
    return (
      <div className="relative mt-20">
        <div className="mx-6 md:mx-auto max-w-6xl">
          <div className="bg-black rounded-xl px-6 py-8 md:py-12 md:px-16">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-white text-2xl md:text-4xl font-bold max-w-md mb-6 md:mb-0">
                RESTEZ INFORMÉ DE NOS DERNIÈRES OFFRES
              </h2>
              
              <div className="md:w-[400px]">
                <div className="relative mb-3">
                  <input 
                    type="email" 
                    placeholder="Entrez votre adresse email" 
                    className="w-full px-4 py-3 rounded-lg bg-white pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none" 
                      className="text-gray-400"
                    >
                      <path d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  S'abonner à la Newsletter
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Inscrivez-vous à notre newsletter pour ne rien manquer de l&apos;actualité mode
            </p>
          </div>
        </div>
      </div>
    );
  }