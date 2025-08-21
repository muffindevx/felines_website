export interface Feline {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  shortDescription: string;
  description: string;
  characteristics: {
    weight: string;
    length: string;
    lifespan: string;
    speed: string;
    diet: string;
  };
  habitat: {
    regions: string[];
    environment: string;
    territory: string;
    coordinates: Array<{
      lat: number;
      lng: number;
      name: string;
    }>;
  };
  conservation: {
    status: string;
    population: string;
    threats: string[];
  };
  images: string[];
  funFacts: string[];
}