"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TagAboutCard from '@/components/sections/about/TagAboutCard';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Sparkles, TrendingUp, Award, Heart, ShoppingCart, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="radialGradient"
      cardStyle="shadow-colored"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Pancho"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548551384-8cfwn8zz.jpg"
          logoAlt="Pancho Logo"
          navItems={[
            { name: "Products", id: "products" },
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "products" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Discover Premium Pancho Products"
          description="Curated collection of exceptional items designed for discerning customers who demand quality and style"
          tag="New Arrivals"
          tagIcon={Sparkles}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548562268-xqgignh9.jpg", imageAlt: "Featured Pancho Product 1" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548563412-27klaeog.jpg", imageAlt: "Featured Pancho Product 2" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548564422-nvutc003.jpg", imageAlt: "Featured Pancho Product 3" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548565389-28cldrc4.jpg", imageAlt: "Featured Pancho Product 4" }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "View All", href: "products" }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardSeven
          title="Featured Products"
          description="Explore our carefully selected range of premium items perfect for any occasion"
          tag="Best Sellers"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              name: "Premium Pancho Classic",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548566421-bbrr8r1l.jpg",
              imageAlt: "Premium Pancho Classic"
            },
            {
              id: "2",
              name: "Deluxe Pancho Pro",
              price: "$149.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548567250-986psgmi.jpg",
              imageAlt: "Deluxe Pancho Pro"
            },
            {
              id: "3",
              name: "Pancho Elite Edition",
              price: "$199.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548568247-3yk2zols.jpg",
              imageAlt: "Pancho Elite Edition"
            },
            {
              id: "4",
              name: "Pancho Signature Series",
              price: "$129.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548569246-zcr65h56.jpg",
              imageAlt: "Pancho Signature Series"
            },
            {
              id: "5",
              name: "Pancho Limited Black",
              price: "$179.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548570146-9smgkfn9.jpg",
              imageAlt: "Pancho Limited Black"
            },
            {
              id: "6",
              name: "Pancho Collector's Gold",
              price: "$249.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548571012-xzdbhvp2.jpg",
              imageAlt: "Pancho Collector's Gold"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAboutCard
          tag="Our Story"
          tagIcon={Award}
          title="Crafted for Excellence and Quality"
          paragraphs={[
            "At Pancho, we believe every customer deserves access to premium products that combine exceptional quality with exceptional value. Our mission is to source and deliver the finest items that exceed expectations.",
            "With over a decade of experience in the industry, we have established relationships with trusted suppliers worldwide. Every product in our collection has been personally vetted to ensure it meets our rigorous quality standards.",
            "We are committed to providing outstanding customer service, competitive pricing, and a seamless shopping experience that keeps our customers coming back."
          ]}
          icon={Heart}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "The quality of Pancho products is outstanding. I have been a customer for three years and have never been disappointed with my purchases.",
              name: "Sarah Johnson",
              role: "Verified Buyer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548572392-bzmnn3z8.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              quote: "Exceptional service and fast shipping. The products arrived in perfect condition and exceeded my expectations in every way.",
              name: "Michael Chen",
              role: "Regular Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548573372-rxt0rn3z.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              quote: "I recommend Pancho to all my friends. The value for money is incredible and the customer support team is always helpful.",
              name: "Emily Rodriguez",
              role: "Loyal Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548574277-vw96ix02.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              quote: "Best online shopping experience I have had. The website is easy to navigate and the checkout process is smooth and secure.",
              name: "David Kim",
              role: "Verified Buyer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548575168-kvf4b53l.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              quote: "Premium quality at reasonable prices. Pancho offers the best selection of products I have found anywhere online.",
              name: "Jessica Martinez",
              role: "Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548576325-9nubhmx7.png",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "6",
              quote: "I have purchased multiple times and each experience has been consistent and excellent. Highly recommended!",
              name: "Robert Thompson",
              role: "Verified Buyer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548577422-do2feopg.jpg",
              imageAlt: "Robert Thompson"
            }
          ]}
          variant="card"
          title="Trusted by Thousands of Happy Customers"
          description="Real reviews from real customers who love Pancho products"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="socialproof" data-section="socialproof">
        <SocialProofThree
          title="Trusted By Leading Platforms"
          description="Our products are featured and recommended by the world's most trusted e-commerce platforms"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548552483-03ibts2p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548553450-4chps04f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548554369-8fnnw6jn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548555307-kvo1vfp3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548556160-4m5764ar.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548557129-qtkvf8kg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548558070-wrwhe1i9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548558961-vpldn4nf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548559993-xgymb1ml.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548560812-itxlnur9.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our products, shipping, and returns"
          faqs={[
            {
              id: "1",
              title: "What is the return policy?",
              content: "We offer a 30-day money-back guarantee on all products. If you are not completely satisfied, simply return the item in its original condition for a full refund."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping typically takes 5-7 business days. We also offer expedited shipping options that arrive within 2-3 business days for an additional fee."
            },
            {
              id: "3",
              title: "Are your products authentic?",
              content: "Yes, all Pancho products are 100% authentic. We source directly from manufacturers and authorized distributors to guarantee authenticity."
            },
            {
              id: "4",
              title: "Do you offer warranties?",
              content: "Most of our products come with manufacturer warranties ranging from 1-3 years. Details are included with each product description."
            },
            {
              id: "5",
              title: "Can I track my order?",
              content: "Absolutely. You will receive a tracking number via email once your order ships, allowing you to monitor your package in real-time."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for your convenience and security."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Shop?"
          ctaDescription="Browse our collection or reach out with any questions. Our team is here to help you find the perfect product."
          ctaButton={{ text: "Start Shopping", href: "products" }}
          ctaIcon={ShoppingCart}
          faqs={[
            {
              id: "1",
              title: "How do I place an order?",
              content: "Simply browse our products, add items to your cart, and proceed to checkout. The process takes just a few minutes."
            },
            {
              id: "2",
              title: "Is my payment information secure?",
              content: "Yes, we use industry-leading SSL encryption and security protocols to protect your payment information."
            },
            {
              id: "3",
              title: "Can I modify or cancel my order?",
              content: "Orders can be modified or cancelled within 24 hours of purchase. Contact our support team immediately if you need to make changes."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765548551384-8cfwn8zz.jpg"
          logoText="Pancho"
          description="Premium e-commerce destination for quality products. Shop with confidence knowing every item is carefully selected for excellence."
          copyrightText="© 2025 Pancho. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Products", href: "products" },
                { label: "New Arrivals", href: "products" },
                { label: "Best Sellers", href: "products" },
                { label: "Sale Items", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Shipping Info", href: "#shipping" },
                { label: "Returns", href: "#returns" },
                { label: "Track Order", href: "#track" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Accessibility", href: "#accessibility" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}