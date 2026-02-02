
// Import React to use React.ReactNode type
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  priceTag?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  image: string;
}