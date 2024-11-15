
import React from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin,
  Smartphone
} from 'lucide-react';

import Image from 'next/image';
import playStore from '../images/googleplay.png'
import AppStore from '../images/appstore.jpg'
import mockup from '../images/feature-cities-for-people.webp'

const DownloadAndFooter = () => {
  const footerLinks = {
    company: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/press' },
      { title: 'Blog', href: '/blog' }
    ],
    legal: [
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'Disclaimer', href: '/disclaimer' }
    ],
    support: [
      { title: 'Help Center', href: '/help' },
      { title: 'Safety', href: '/safety' },
      { title: 'Lost & Found', href: '/lost-found' },
      { title: 'Contact Us', href: '/contact' }
    ],
    cities: [
      { title: 'Johannesburg', href: '/cities/johannesburg' },
      { title: 'Cape Town', href: '/cities/cape-town' },
      { title: 'Durban', href: '/cities/durban' },
      { title: 'Pretoria', href: '/cities/pretoria' }
    ]
  };

  return (
    <>
      {/* Download Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Your Safe Ride Home is
              <span className="text-yellow-400"> One Tap </span>
              Away
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 text-center">
              Join thousands of South Africans who trust Swift! for safe, reliable, and affordable rides. Download the app and experience the difference today.
            </p>

            {/* App Mockup Placeholder - Full Width */}
            <div className="relative mb-12">
              <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-sm">App interface showcase placement</p>
                    <p className="text-gray-400 text-xs mt-2">Recommended size: 1920x1080px</p>
                  </div>
                </div>
                {/* Actual image will replace this placeholder */}
                <Image
                  src={mockup} 
                  alt="Swift App Interface" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 mb-12 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
                <p className="text-gray-600">Happy Riders</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Cities Nationwide</p>
              </div>
            </div>

            {/* Download Buttons - Centered */}
            <div className="flex items-center justify-center space-x-4">
              <a 
                href="#" 
                className=''
              >
                <Image 
                  src={AppStore}
                  alt="Download on App Store" 
                  width={165}
                  height={48}
                />
              </a>
              <a 
                href="#" 
              >
                <Image
                 width={165}
                 height={48}
                  src={playStore}
                  alt="Get it on Google Play" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Swift<span className="text-yellow-400">!</span>
                </h3>
                <p className="text-gray-600 mt-2">
                  South Africa&apos;s most innovative e-hailing service.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>0800 SWIFT SA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>support@swift.co.za</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gray-900 font-semibold mb-4 uppercase text-sm">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.title}>
                      <a 
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Swift! All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DownloadAndFooter;

/*
Implementation Guide
==================

1. Required Dependencies:
```bash
npm install lucide-react
```

2. Required Assets:
- app-interface.png (1920x1080px)
- app-store.svg
- play-store.svg
- Any brand fonts

3. Integration:
```jsx
import DownloadAndFooter from './components/DownloadAndFooter';

// In your page/layout:
<DownloadAndFooter />
```

4. Key Features:
- Responsive layout
- Image placeholder
- Interactive buttons
- Comprehensive footer
- Social links
- Contact information

5. Customization:
- Update footerLinks object for navigation
- Modify contact information
- Add/remove social links
- Adjust colors via Tailwind classes
- Update copy and content

6. Image Handling:
- Replace placeholder with actual app interface
- Maintain 16:9 aspect ratio
- Ensure high resolution
- Optimize for web

7. Accessibility:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

8. Performance:
- Lazy load images
- Optimize SVGs
- Minimize reflows
- Efficient grid system

9. Browser Support:
- Modern browsers
- Flexbox/Grid support
- CSS transitions
- SVG support

10. Testing Checklist:
- [ ] Responsive behavior
- [ ] Link functionality
- [ ] Image loading
- [ ] Footer navigation
- [ ] Social links
- [ ] Contact information
- [ ] Copyright year
- [ ] Button states
*/