import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Award, Users, Home as HomeIcon, CheckCircle2, Building2 } from 'lucide-react';
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

const projects = [
  {
    title: 'Villa Moderne',
    description: 'Une villa contemporaine avec vue sur la lagune',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg'
    ]
  },
  {
    title: 'Résidence de Luxe',
    description: 'Un complexe résidentiel haut de gamme',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg',
      'https://images.pexels.com/photos/1643386/pexels-photo-1643386.jpeg'
    ]
  },
  {
    title: 'Penthouse',
    description: 'Un penthouse avec finitions luxueuses',
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg'
    ]
  },
];

const services = [
  {
    title: 'Architecture Design',
    description: 'Nous créons des designs architecturaux innovants et élégants qui reflètent votre vision.',
    features: [
      'Conception architecturale',
      'Plans détaillés',
      'Modélisation 3D',
      'Études de faisabilité'
    ]
  },
  {
    title: 'Construction de Luxe',
    description: 'Spécialisés dans la construction haut de gamme, nous utilisons les meilleurs matériaux et techniques.',
    features: [
      'Villas de luxe',
      'Appartements haut de gamme',
      'Espaces commerciaux',
      'Finitions premium'
    ]
  },
  {
    title: 'Rénovation',
    description: 'Transformez votre espace existant en un chef-d\'œuvre moderne tout en préservant son caractère unique.',
    features: [
      'Rénovation complète',
      'Modernisation',
      'Extension',
      'Optimisation d\'espace'
    ]
  }
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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img src="/La maison de luxe.jpeg" alt="Luxurys Logo" className="h-16" />
          </a>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 p-4 md:p-0 shadow-lg md:shadow-none`}>
            <a href="#home" className="text-gray-800 hover:text-gold-600 transition">Accueil</a>
            <a href="#services" className="text-gray-800 hover:text-gold-600 transition">Services</a>
            <a href="#projects" className="text-gray-800 hover:text-gold-600 transition">Projets</a>
            <a href="#about" className="text-gray-800 hover:text-gold-600 transition">À Propos</a>
            <a href="#contact" className="text-gray-800 hover:text-gold-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
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
              <a href="#contact" className="bg-gold-600 text-white px-8 py-3 rounded hover:bg-gold-700 transition inline-block">
                Contactez-nous
              </a>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-center px-4">{project.description}</p>
                  <button className="mt-4 bg-gold-600 text-white px-6 py-2 rounded hover:bg-gold-700 transition">
                    Voir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Depuis notre création, La Maison LUXURYS s'est imposée comme un leader dans le domaine
                de l'architecture et de la construction de luxe à Abidjan. Notre engagement envers
                l'excellence et notre passion pour l'innovation nous ont permis de réaliser les rêves
                de nos clients les plus exigeants.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-gold-600" />
                  <span>Plus de 15 ans d'excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-gold-600" />
                  <span>Une équipe de 50+ experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold-600" />
                  <span>100+ projets réalisés</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
                alt="Notre équipe"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contactez-Nous</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <p className="text-gray-600">Cocody, Abidjan<br />Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Téléphone</h4>
                    <p className="text-gray-600">+225 07 07 07 07 07</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">contact@luxurys.ci</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-gold-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold">Horaires d'ouverture</h4>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 8h - 18h<br />
                      Samedi: Sur rendez-vous<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600"
                ></textarea>
                <button className="bg-gold-600 text-white px-8 py-3 rounded hover:bg-gold-700 transition w-full">
                  Envoyer
                </button>
              </form>
            </div>
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="relative">
                <img 
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded"
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {selectedProject.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index ? 'bg-gold-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;