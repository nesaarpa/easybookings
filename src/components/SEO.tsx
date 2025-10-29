import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = 'Easy Bookings - Book Cheap Flights by Phone | 24/7 Flight Booking Service',
  description = 'Book cheap flights worldwide with Easy Bookings! Expert travel agents available 24/7 to help you find the best flight deals. Call now for personalized flight booking assistance and exclusive airline deals.',
  keywords = 'cheap flights, flight booking, book flights by phone, airline tickets, travel agent, 24/7 flight booking, discount flights, international flights, domestic flights, cheap airline tickets, flight deals, travel booking, easy bookings',
  image = 'https://www.easybookings.us/og-image.jpg',
  url = 'https://www.easybookings.us/',
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
