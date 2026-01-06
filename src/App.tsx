import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Notion Consultancy Course – Part 1 To 3',
    description: 'A structured, pre-recorded course teaching Notion workspace design, productivity systems, and professional consulting workflows.',
    price: 499,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    link: 'https://checkout.dodopayments.com/buy/pdt_0NVQG3G31bIlYSCAyl7hl?quantity=1'
  },
  {
    id: 2,
    name: 'Dave Kettner – Etsy Profits Generator: How To Make $11,453+ Per Month On Etsy',
    description: 'A comprehensive Etsy training covering store setup, product research, listing optimization, and scaling strategies through proven frameworks.',
    price: 995,
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg',
    link: 'https://checkout.dodopayments.com/buy/pdt_0NVQEpGypaR9mibxsoT2c?quantity=1'
  },
  {
    id: 3,
    name: 'The Complete Foundation Stock Trading Course',
    description: 'A beginner-friendly, educational course explaining stock market fundamentals, trading strategies, and risk management concepts.',
    price: 496,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    link: 'https://checkout.dodopayments.com/buy/pdt_0NVIgyFPStRlZAyVoOg67?quantity=1'
  },
  {
    id: 4,
    name: 'How To Start A YouTube Automation Channel & Monetize It Fast',
    description: 'A step-by-step digital course explaining how to build faceless YouTube automation channels and monetize them efficiently.',
    price: 290,
    image: 'https://images.pexels.com/photos/3721942/pexels-photo-3721942.jpeg',
    link: 'https://checkout.dodopayments.com/buy/pdt_0NVIcZfHc4NWf88eolDxk?quantity=1'
  },
  {
    id: 5,
    name: 'Dejan Nikolic – Passive Income: Unique YouTube Method',
    description: 'A pre-recorded training focused on YouTube-based digital income systems, content workflows, and monetization strategies.',
    price: 950,
    image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
    link: 'https://checkout.dodopayments.com/buy/pdt_0NVE1tZabVaN7XJ4YYkYz?quantity=1'
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <img
              src="/image__2_-removebg-preview.png"
              alt="Logo"
              className="h-12 w-auto"
            />

            <nav className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('courses')} className="text-white hover:text-blue-300 transition-colors">Courses</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-300 transition-colors">Contact</button>
              <button onClick={() => scrollToSection('courses')} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
                Browse Courses
              </button>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-black/20 backdrop-blur-md border-t border-white/10">
              <nav className="flex flex-col gap-4 p-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-300 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('courses')} className="text-white hover:text-blue-300 transition-colors text-left">Courses</button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-300 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-300 transition-colors text-left">Contact</button>
                <button onClick={() => scrollToSection('courses')} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors w-full">
                  Browse Courses
                </button>
              </nav>
            </div>
          )}
        </header>

        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">Digital Learning Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Digital Courses for Skill Growth & Online Income
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Access high-quality, pre-recorded digital courses designed to help you learn practical skills and build sustainable online income.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => scrollToSection('courses')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg text-lg">
                View Courses
              </button>
              <button onClick={() => scrollToSection('about')} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Courses</h2>
              <p className="text-xl text-blue-200">Explore our collection of premium digital courses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {products.map((product) => (
                <div key={product.id} className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-300 flex flex-col">
                  <div className="h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-1">${product.price}</div>
                      <div className="text-sm text-gray-500">One-time payment</div>
                    </div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300 text-center"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What You Get</h2>
              <p className="text-xl text-blue-200">All products are digital educational materials</p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { title: '100% Digital Products', icon: '📱' },
                { title: 'Instant Access', icon: '⚡' },
                { title: 'Pre-Recorded Content', icon: '📹' },
                { title: 'No Shipping', icon: '✓' },
                { title: 'Secure Payments', icon: '🔒' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-center text-white/80">
                All products are digital educational materials. Results may vary based on individual effort and experience.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Us</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              We provide high-quality digital courses created to educate, inform, and empower individuals with practical online skills. All content is delivered digitally and accessible immediately after purchase. Our mission is to make premium education affordable and accessible to everyone, regardless of their location or schedule.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
                <p className="text-white">Students Worldwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">5+</div>
                <p className="text-white">Premium Courses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">100%</div>
                <p className="text-white">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-12 px-4 border-t border-white/10 backdrop-blur-sm bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <p className="text-white/60 text-sm mt-2">support@damco.space</p>
                <p className="text-white/60 text-sm mt-1">manager@damco.space</p>
                <p className="text-white/60 text-sm mt-1">+1 307-346-2242</p>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-white font-semibold mb-4">EduHub</h3>
                <p className="text-white/60 text-sm">Premium Digital Learning</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-center mb-6">
                <p className="text-white/60 text-sm">
                  Educational content only
                </p>
              </div>
              <div className="text-center text-white/40 text-sm">
                <p>&copy; {new Date().getFullYear()} EduHub. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
