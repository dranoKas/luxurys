import { useEffect } from 'react';
import { Building2, Phone, Mail, MapPin, Clock, Award, Users, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const partners = [
  { name: 'Architect Studio', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
  { name: 'Design Co', logo: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg' },
  { name: 'Build Pro', logo: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg' },
];

const team = [
  {
    name: 'Jean Dupont',
    role: 'Architecte Principal',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg'
  },
  {
    name: 'Marie Claire',
    role: 'Designer d\'Intérieur',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg'
  },
  {
    name: 'Paul Martin',
    role: 'Chef de Projet',
    image: 'https://images.pexels.com/photos/5668860/pexels-photo-5668860.jpeg'
  },
];

const faq = [
  {
    question: 'Quelle est la durée moyenne d\'un projet ?',
    answer: 'La durée varie selon la complexité du projet, généralement entre 6 et 18 mois.'
  },
  {
    question: 'Travaillez-vous sur des projets à l\'international ?',
    answer: 'Oui, nous réalisons des projets dans toute l\'Afrique de l\'Ouest.'
  },
  {
    question: 'Quels types de projets réalisez-vous ?',
    answer: 'Nous réalisons des villas de luxe, des immeubles résidentiels et des projets commerciaux haut de gamme.'
  },
];

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                alt="Luxury Home 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                alt="Luxury Home 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
                alt="Luxury Home 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">La Maison LUXURYS</h1>
              <p className="text-2xl mb-8">Architectes & Constructeurs de Luxe à Abidjan</p>
              <p className="text-xl mb-12">Excellence et raffinement dans chaque détail de votre projet immobilier</p>
              <button className="bg-gold-600 text-white px-8 py-3 rounded hover:bg-gold-700 transition">
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-gold-600" />
            <span>+225 07 07 07 07 07</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-gold-600" />
            <span>contact@luxurys.ci</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-gold-600" />
            <span>Cocody, Abidjan</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="text-gold-600" />
            <span>Lun - Ven: 8h - 18h</span>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-32 h-32 object-cover mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <span className="text-xl font-semibold">{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/La maison de luxe.jpeg" alt="Luxurys Logo" className="h-16 mb-4" />
              <p className="text-gray-400">
                Excellence dans l'architecture et la construction de luxe à Abidjan
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Cocody, Abidjan</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+225 07 07 07 07 07</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@luxurys.ci</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Architecture Design</li>
                <li>Construction de Luxe</li>
                <li>Rénovation</li>
                <li>Conseil & Expertise</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Horaires</h3>
              <p className="text-gray-400">
                Lundi - Vendredi: 8h - 18h<br />
                Samedi: Sur rendez-vous<br />
                Dimanche: Fermé
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 La Maison LUXURYS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}