import { Feline } from '../types/feline';

export const felines: Feline[] = [
  {
    id: "african-lion",
    name: "African Lion",
    scientificName: "Panthera leo",
    category: "Big Cat",
    shortDescription: "The king of the African savanna, known for its majestic mane and social pride structure.",
    description: "The African Lion is one of the most iconic big cats, living in social groups called prides. Males are distinguished by their impressive manes, which serve as protection during fights and as a symbol of dominance. These apex predators play a crucial role in maintaining the balance of African ecosystems.",
    characteristics: {
      weight: "120-250 kg",
      length: "1.4-2.5 m",
      lifespan: "10-14 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Sub-Saharan Africa"],
      environment: "Savanna, grasslands, open woodlands",
      territory: "20-400 km²",
      coordinates: [
        { lat: -2.0, lng: 34.0, name: "Serengeti National Park" },
        { lat: -24.0, lng: 31.0, name: "Kruger National Park" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "20,000-25,000",
      threats: ["Habitat loss", "Human-wildlife conflict", "Poaching"]
    },
    images: ["/assets/images/lion.png"],
    funFacts: [
      "A lion's roar can be heard from 8 kilometers away",
      "Lions sleep 16-20 hours per day",
      "Female lions do most of the hunting"
    ]
  },
  {
    id: "siberian-tiger",
    name: "Siberian Tiger",
    scientificName: "Panthera tigris altaica",
    category: "Big Cat",
    shortDescription: "The largest living cat species, adapted to survive in the harsh Siberian wilderness.",
    description: "The Siberian Tiger, also known as the Amur Tiger, is the largest living cat subspecies. These magnificent predators have adapted to survive in the harsh winters of the Russian Far East, with thick fur and a layer of fat for insulation.",
    characteristics: {
      weight: "180-320 kg",
      length: "2.7-3.8 m",
      lifespan: "10-15 years",
      speed: "60 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Russian Far East", "Northeast China"],
      environment: "Boreal forests, taiga",
      territory: "300-1000 km²",
      coordinates: [
        { lat: 45.0, lng: 135.0, name: "Primorsky Krai" },
        { lat: 47.0, lng: 130.0, name: "Khabarovsk Krai" }
      ]
    },
    conservation: {
      status: "Endangered",
      population: "400-500",
      threats: ["Poaching", "Habitat fragmentation", "Prey depletion"]
    },
    images: ["/assets/images/siberian_tiger.png"],
    funFacts: [
      "Can leap horizontally up to 10 meters",
      "Has night vision 6 times better than humans",
      "Each tiger's stripes are unique like fingerprints"
    ]
  },
  {
    id: "snow-leopard",
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    category: "Big Cat",
    shortDescription: "The elusive ghost of the mountains, perfectly adapted to high-altitude life.",
    description: "The Snow Leopard is a magnificent big cat that inhabits the mountain ranges of Central and South Asia. Known as the 'ghost of the mountains,' these cats are incredibly elusive and perfectly adapted to life at high altitudes.",
    characteristics: {
      weight: "22-55 kg",
      length: "0.75-1.3 m",
      lifespan: "15-18 years",
      speed: "55 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central Asia", "Himalayas"],
      environment: "Alpine and subalpine zones",
      territory: "30-65 km²",
      coordinates: [
        { lat: 28.0, lng: 84.0, name: "Nepal Himalayas" },
        { lat: 42.0, lng: 80.0, name: "Altai Mountains" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "2,710-3,386",
      threats: ["Climate change", "Poaching", "Retaliatory killing"]
    },
    images: ["/assets/images/snow_leopard.png"],
    funFacts: [
      "Can jump up to 15 meters in a single leap",
      "Their large paws act like snowshoes",
      "Cannot roar, only chuff and purr"
    ]
  },
  {
    id: "jaguar",
    name: "Jaguar",
    scientificName: "Panthera onca",
    category: "Big Cat",
    shortDescription: "The apex predator of the Americas with the strongest bite force of any big cat.",
    description: "The Jaguar is the third-largest big cat in the world and the largest in the Americas. Known for their incredible bite force and swimming ability, jaguars are apex predators in their rainforest habitat.",
    characteristics: {
      weight: "56-96 kg",
      length: "1.1-1.85 m",
      lifespan: "12-15 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central America", "South America"],
      environment: "Rainforests, wetlands, grasslands",
      territory: "25-100 km²",
      coordinates: [
        { lat: -3.0, lng: -60.0, name: "Amazon Rainforest" },
        { lat: -16.0, lng: -57.0, name: "Pantanal" }
      ]
    },
    conservation: {
      status: "Near Threatened",
      population: "64,000-173,000",
      threats: ["Deforestation", "Habitat fragmentation", "Hunting"]
    },
    images: ["/assets/images/jaguar.png"],
    funFacts: [
      "Has the strongest bite force of any big cat",
      "Excellent swimmers and often hunt in water",
      "Can crush turtle shells and caiman skulls"
    ]
  },
  {
    id: "leopard",
    name: "Leopard",
    scientificName: "Panthera pardus",
    category: "Big Cat",
    shortDescription: "The most adaptable big cat, found across Africa and Asia in diverse habitats.",
    description: "Leopards are incredibly adaptable big cats found across Africa and Asia. They are excellent climbers and often drag their prey up into trees to avoid scavengers. Their spotted coat provides perfect camouflage.",
    characteristics: {
      weight: "28-90 kg",
      length: "0.9-1.9 m",
      lifespan: "12-17 years",
      speed: "58 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Africa", "Asia"],
      environment: "Forests, grasslands, mountains, deserts",
      territory: "8-63 km²",
      coordinates: [
        { lat: -1.0, lng: 37.0, name: "Maasai Mara" },
        { lat: 20.0, lng: 77.0, name: "Central India" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "700,000-1,000,000",
      threats: ["Habitat loss", "Poaching", "Human-wildlife conflict"]
    },
    images: ["/assets/images/leopard.png"],
    funFacts: [
      "Can carry prey twice their body weight up a tree",
      "Have exceptional night vision",
      "Are excellent swimmers"
    ]
  },
  {
    id: "cheetah",
    name: "Cheetah",
    scientificName: "Acinonyx jubatus",
    category: "Big Cat",
    shortDescription: "The fastest land animal, built for incredible speed and acceleration.",
    description: "The Cheetah is the fastest land animal, capable of reaching speeds up to 120 km/h. Their slender build, long legs, and flexible spine make them perfectly adapted for high-speed chases across the African savanna.",
    characteristics: {
      weight: "21-72 kg",
      length: "1.1-1.5 m",
      lifespan: "8-12 years",
      speed: "120 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Africa", "Iran"],
      environment: "Savannas, grasslands, semi-deserts",
      territory: "37-160 km²",
      coordinates: [
        { lat: -2.5, lng: 35.0, name: "Maasai Mara" },
        { lat: -20.0, lng: 23.0, name: "Kalahari Desert" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "6,500-7,000",
      threats: ["Habitat loss", "Human-wildlife conflict", "Genetic bottleneck"]
    },
    images: ["/assets/images/cheetah.png"],
    funFacts: [
      "Can accelerate from 0 to 100 km/h in 3 seconds",
      "Cannot retract their claws completely",
      "Have distinctive black tear marks"
    ]
  },
  {
    id: "puma",
    name: "Puma",
    scientificName: "Puma concolor",
    category: "Big Cat",
    shortDescription: "The most widespread wild cat in the Americas, known for its incredible jumping ability.",
    description: "Also known as Mountain Lion or Cougar, the Puma has the largest distribution of any wild cat in the Western Hemisphere. They are excellent jumpers and can leap vertically up to 5.5 meters.",
    characteristics: {
      weight: "29-90 kg",
      length: "1.0-1.8 m",
      lifespan: "8-13 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["North America", "Central America", "South America"],
      environment: "Mountains, forests, deserts, swamps",
      territory: "50-1000 km²",
      coordinates: [
        { lat: 40.0, lng: -105.0, name: "Rocky Mountains" },
        { lat: -40.0, lng: -70.0, name: "Patagonia" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "50,000+",
      threats: ["Habitat fragmentation", "Hunting", "Vehicle strikes"]
    },
    images: ["/assets/images/puma.png"],
    funFacts: [
      "Can jump vertically up to 5.5 meters",
      "Cannot roar, only purr and scream",
      "Have the largest hind legs relative to body size"
    ]
  },
  {
    id: "lynx",
    name: "Eurasian Lynx",
    scientificName: "Lynx lynx",
    category: "Wild Cat",
    shortDescription: "The largest lynx species with distinctive ear tufts and excellent hunting skills.",
    description: "The Eurasian Lynx is the largest of the lynx species and a skilled predator of European and Asian forests. Their distinctive ear tufts and facial ruff make them easily recognizable.",
    characteristics: {
      weight: "18-30 kg",
      length: "0.8-1.3 m",
      lifespan: "12-20 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Europe", "Central Asia", "Siberia", "Himalayas"],
      environment: "Forests, alpine areas",
      territory: "20-450 km²",
      coordinates: [
        { lat: 60.0, lng: 15.0, name: "Scandinavian Mountains" },
        { lat: 50.0, lng: 100.0, name: "Siberian Taiga" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "45,000-50,000",
      threats: ["Habitat loss", "Prey depletion", "Hunting"]
    },
    images: ["/assets/images/eurisian_lynx.png"],
    funFacts: [
      "Can hear a mouse moving 75 meters away",
      "Their large paws act like snowshoes",
      "Can take down prey 3-4 times their size"
    ]
  },
  {
    id: "bobcat",
    name: "Bobcat",
    scientificName: "Lynx rufus",
    category: "Wild Cat",
    shortDescription: "North America's most common wild cat, named for its distinctive bobbed tail.",
    description: "The Bobcat is North America's most successful wild cat, adapting to various habitats from forests to deserts. Named for their distinctive short, 'bobbed' tail, they are excellent hunters and climbers.",
    characteristics: {
      weight: "6-18 kg",
      length: "0.7-1.25 m",
      lifespan: "7-10 years",
      speed: "48 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["North America"],
      environment: "Forests, swamps, deserts, suburban areas",
      territory: "0.6-326 km²",
      coordinates: [
        { lat: 45.0, lng: -75.0, name: "Canadian Boreal Forest" },
        { lat: 32.0, lng: -110.0, name: "Sonoran Desert" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "2,300,000-3,500,000",
      threats: ["Habitat loss", "Vehicle strikes", "Hunting"]
    },
    images: ["/assets/images/bobcat.png"],
    funFacts: [
      "Can leap up to 3 meters high",
      "Have excellent night vision",
      "Are surprisingly good swimmers"
    ]
  },
  {
    id: "caracal",
    name: "Caracal",
    scientificName: "Caracal caracal",
    category: "Wild Cat",
    shortDescription: "The desert lynx with incredible jumping ability and distinctive black ear tufts.",
    description: "The Caracal, also known as the desert lynx, is renowned for its incredible jumping ability and can leap up to 3 meters high to catch birds in flight. Their distinctive black ear tufts are thought to help with communication.",
    characteristics: {
      weight: "8-19 kg",
      length: "0.6-1.0 m",
      lifespan: "12-16 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Africa", "Middle East", "Central Asia"],
      environment: "Savannas, semi-deserts, scrublands",
      territory: "2-1,116 km²",
      coordinates: [
        { lat: -25.0, lng: 28.0, name: "Kalahari Desert" },
        { lat: 25.0, lng: 55.0, name: "Arabian Peninsula" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Hunting", "Road accidents"]
    },
    images: ["/assets/images/caracal.png"],
    funFacts: [
      "Can leap 3 meters high to catch birds",
      "Can survive without drinking water",
      "Have 20 different muscles controlling their ears"
    ]
  },
  {
    id: "serval",
    name: "Serval",
    scientificName: "Leptailurus serval",
    category: "Wild Cat",
    shortDescription: "The African wild cat with the longest legs relative to body size and exceptional hearing.",
    description: "The Serval is a medium-sized African wild cat with the longest legs relative to body size of any cat. Their exceptional hearing allows them to locate prey in tall grass, and they can leap up to 4 meters horizontally.",
    characteristics: {
      weight: "7-18 kg",
      length: "0.6-1.0 m",
      lifespan: "10-20 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Sub-Saharan Africa"],
      environment: "Savannas, grasslands, wetlands",
      territory: "10-32 km²",
      coordinates: [
        { lat: -2.0, lng: 34.0, name: "Serengeti" },
        { lat: -18.0, lng: 24.0, name: "Okavango Delta" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Hunting for fur", "Road accidents"]
    },
    images: ["/assets/images/serval.png"],
    funFacts: [
      "Have the longest legs relative to body size of any cat",
      "Can hear prey moving underground",
      "Have a 50% hunting success rate"
    ]
  },
  {
    id: "ocelot",
    name: "Ocelot",
    scientificName: "Leopardus pardalis",
    category: "Small Wild Cat",
    shortDescription: "The beautiful spotted cat of the Americas, once prized for its luxurious fur.",
    description: "The Ocelot is a beautiful small wild cat native to the Americas. Once heavily hunted for their luxurious spotted fur, they are now protected. They are excellent climbers and swimmers.",
    characteristics: {
      weight: "8-16 kg",
      length: "0.55-1.0 m",
      lifespan: "7-10 years",
      speed: "56 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central America", "South America", "Southern USA"],
      environment: "Rainforests, coastal marshes, grasslands",
      territory: "3-46 km²",
      coordinates: [
        { lat: 26.0, lng: -98.0, name: "South Texas" },
        { lat: -3.0, lng: -60.0, name: "Amazon Basin" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "800,000-1,500,000",
      threats: ["Habitat loss", "Road accidents", "Illegal pet trade"]
    },
    images: ["/assets/images/ocelot.png"],
    funFacts: [
      "Each ocelot has a unique spot pattern",
      "Are excellent swimmers",
      "Sleep in trees during the day"
    ]
  },
  {
    id: "margay",
    name: "Margay",
    scientificName: "Leopardus wiedii",
    category: "Small Wild Cat",
    shortDescription: "The acrobatic tree cat that can rotate its ankles 180 degrees for climbing.",
    description: "The Margay is a small spotted cat native to Central and South America. They are exceptional climbers, able to rotate their ankles 180 degrees, allowing them to climb down trees head-first like a squirrel.",
    characteristics: {
      weight: "2.6-4.2 kg",
      length: "0.48-0.79 m",
      lifespan: "10-13 years",
      speed: "50 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central America", "South America"],
      environment: "Tropical rainforests",
      territory: "11-16 km²",
      coordinates: [
        { lat: 10.0, lng: -84.0, name: "Costa Rica" },
        { lat: -10.0, lng: -55.0, name: "Brazilian Amazon" }
      ]
    },
    conservation: {
      status: "Near Threatened",
      population: "Unknown",
      threats: ["Deforestation", "Habitat fragmentation", "Illegal pet trade"]
    },
    images: ["/assets/images/margay.png"],
    funFacts: [
      "Can rotate their ankles 180 degrees",
      "Spend most of their life in trees",
      "Can mimic monkey calls to attract prey"
    ]
  },
  {
    id: "jaguarundi",
    name: "Jaguarundi",
    scientificName: "Herpailurus yagouaroundi",
    category: "Small Wild Cat",
    shortDescription: "The otter-like cat with an elongated body and short legs, active during the day.",
    description: "The Jaguarundi is an unusual-looking small wild cat with an elongated body, short legs, and a long tail. Unlike most cats, they are active during the day and have an otter-like appearance.",
    characteristics: {
      weight: "3.5-9.1 kg",
      length: "0.53-0.77 m",
      lifespan: "10-15 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central America", "South America", "Southern USA"],
      environment: "Forests, grasslands, scrublands",
      territory: "13-20 km²",
      coordinates: [
        { lat: 26.0, lng: -98.0, name: "South Texas" },
        { lat: -20.0, lng: -55.0, name: "Pantanal" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Road accidents", "Hunting"]
    },
    images: ["/assets/images/jaguarundi.png"],
    funFacts: [
      "Are active during the day unlike most cats",
      "Have an otter-like appearance",
      "Can purr but cannot roar"
    ]
  },
  {
    id: "geoffroys-cat",
    name: "Geoffroy's Cat",
    scientificName: "Leopardus geoffroyi",
    category: "Small Wild Cat",
    shortDescription: "The adaptable South American cat that can live in various habitats from sea level to high altitudes.",
    description: "Geoffroy's Cat is a small wild cat native to South America. They are highly adaptable and can live in various habitats from sea level to 3,300 meters altitude. They are excellent climbers and swimmers.",
    characteristics: {
      weight: "2-5 kg",
      length: "0.42-0.66 m",
      lifespan: "14 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["South America"],
      environment: "Forests, grasslands, scrublands, mountains",
      territory: "2-8 km²",
      coordinates: [
        { lat: -35.0, lng: -65.0, name: "Argentine Pampas" },
        { lat: -45.0, lng: -70.0, name: "Patagonia" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Hunting for fur", "Road accidents"]
    },
    images: ["/assets/images/geoffroys_cat.png"],
    funFacts: [
      "Can live at altitudes up to 3,300 meters",
      "Are excellent swimmers",
      "Have been known to hybridize with domestic cats"
    ]
  },
  {
    id: "kodkod",
    name: "Kodkod",
    scientificName: "Leopardus guigna",
    category: "Small Wild Cat",
    shortDescription: "The smallest wild cat in the Americas, endemic to Chile and Argentina.",
    description: "The Kodkod, also known as Güiña, is the smallest wild cat in the Americas. Endemic to Chile and Argentina, they are excellent climbers and primarily arboreal, spending much of their time in trees.",
    characteristics: {
      weight: "1.5-3 kg",
      length: "0.37-0.51 m",
      lifespan: "11 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Chile", "Argentina"],
      environment: "Temperate rainforests, scrublands",
      territory: "1.1-2.5 km²",
      coordinates: [
        { lat: -40.0, lng: -73.0, name: "Chilean Temperate Rainforest" },
        { lat: -42.0, lng: -71.0, name: "Argentine Patagonia" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "9,000-12,000",
      threats: ["Deforestation", "Habitat fragmentation", "Domestic dog attacks"]
    },
     images: ["/assets/images/kodkod.png"],
    funFacts: [
      "Smallest wild cat in the Americas",
      "Primarily arboreal",
      "Can climb trees with trunks up to 2 meters in diameter"
    ]
  },
  {
    id: "oncilla",
    name: "Oncilla",
    scientificName: "Leopardus tigrinus",
    category: "Small Wild Cat",
    shortDescription: "The little spotted cat of South America, also known as the Northern Tiger Cat.",
    description: "The Oncilla, also known as the Northern Tiger Cat, is a small spotted wild cat found in Central and South America. They are primarily arboreal and are excellent climbers.",
    characteristics: {
      weight: "1.5-3 kg",
      length: "0.35-0.59 m",
      lifespan: "11-17 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central America", "Northern South America"],
      environment: "Cloud forests, rainforests",
      territory: "0.8-17 km²",
      coordinates: [
        { lat: 10.0, lng: -84.0, name: "Costa Rican Cloud Forest" },
        { lat: 5.0, lng: -75.0, name: "Colombian Andes" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "Unknown",
      threats: ["Deforestation", "Habitat fragmentation", "Hunting"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Primarily arboreal",
      "Have the largest eyes relative to head size of any cat",
      "Are excellent climbers"
    ]
  },
  {
    id: "sand-cat",
    name: "Sand Cat",
    scientificName: "Felis margarita",
    category: "Small Wild Cat",
    shortDescription: "The desert specialist that can survive without drinking water, getting moisture from prey.",
    description: "The Sand Cat is a small wild cat perfectly adapted to desert life. They can survive without drinking water, getting all the moisture they need from their prey. Their fur-covered paws protect them from hot sand.",
    characteristics: {
      weight: "1.4-3.4 kg",
      length: "0.39-0.52 m",
      lifespan: "13 years",
      speed: "40 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["North Africa", "Middle East", "Central Asia"],
      environment: "Sandy and stony deserts",
      territory: "16 km²",
      coordinates: [
        { lat: 30.0, lng: 31.0, name: "Sahara Desert" },
        { lat: 25.0, lng: 55.0, name: "Arabian Desert" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat degradation", "Hunting", "Collection for pet trade"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Can survive without drinking water",
      "Have fur on the soles of their feet",
      "Can withstand temperatures from -5°C to 52°C"
    ]
  },
  {
    id: "black-footed-cat",
    name: "Black-footed Cat",
    scientificName: "Felis nigripes",
    category: "Small Wild Cat",
    shortDescription: "Africa's smallest wild cat, known as the deadliest cat with a 60% hunting success rate.",
    description: "The Black-footed Cat is Africa's smallest wild cat but also one of the deadliest, with a hunting success rate of 60%. Despite their small size, they are fierce predators and can take down prey larger than themselves.",
    characteristics: {
      weight: "1-2.5 kg",
      length: "0.35-0.52 m",
      lifespan: "13-15 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Southern Africa"],
      environment: "Arid savannas, grasslands, semi-deserts",
      territory: "10-22 km²",
      coordinates: [
        { lat: -26.0, lng: 20.0, name: "Kalahari Desert" },
        { lat: -32.0, lng: 22.0, name: "Karoo" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "9,707-13,867",
      threats: ["Habitat loss", "Poisoning", "Road accidents"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Africa's smallest wild cat",
      "Has a 60% hunting success rate",
      "Can walk up to 32 km in a single night"
    ]
  },
  {
    id: "jungle-cat",
    name: "Jungle Cat",
    scientificName: "Felis chaus",
    category: "Small Wild Cat",
    shortDescription: "The largest of the Felis genus, adapted to wetland environments and tall grasslands.",
    description: "The Jungle Cat, despite its name, primarily inhabits wetlands and tall grasslands rather than jungles. They are the largest of the Felis genus and are excellent swimmers and jumpers.",
    characteristics: {
      weight: "3-16 kg",
      length: "0.6-0.94 m",
      lifespan: "12-14 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Middle East", "Central Asia", "South Asia", "Southeast Asia"],
      environment: "Wetlands, grasslands, scrublands",
      territory: "1-180 km²",
      coordinates: [
        { lat: 27.0, lng: 77.0, name: "Indian Subcontinent" },
        { lat: 40.0, lng: 45.0, name: "Caucasus" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Hunting", "Hybridization with domestic cats"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Largest of the Felis genus",
      "Excellent swimmers",
      "Can jump up to 1.5 meters high"
    ]
  },
  {
    id: "wildcat",
    name: "European Wildcat",
    scientificName: "Felis silvestris",
    category: "Small Wild Cat",
    shortDescription: "The ancestor of domestic cats, distinguished by their robust build and thick tail.",
    description: "The European Wildcat is the ancestor of domestic cats and is distinguished by their more robust build, broader head, and thick tail with distinct black rings. They are solitary and territorial.",
    characteristics: {
      weight: "3-8 kg",
      length: "0.5-0.8 m",
      lifespan: "12-15 years",
      speed: "48 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Europe", "Western Asia", "Africa"],
      environment: "Forests, grasslands, scrublands",
      territory: "1-10 km²",
      coordinates: [
        { lat: 56.0, lng: -4.0, name: "Scottish Highlands" },
        { lat: 45.0, lng: 25.0, name: "Carpathian Mountains" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Hybridization with domestic cats", "Habitat loss", "Disease"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Ancestor of domestic cats",
      "Have a more robust build than domestic cats",
      "Are completely solitary except during mating"
    ]
  },
  {
    id: "chinese-mountain-cat",
    name: "Chinese Mountain Cat",
    scientificName: "Felis bieti",
    category: "Small Wild Cat",
    shortDescription: "China's only endemic wild cat species, adapted to high-altitude environments.",
    description: "The Chinese Mountain Cat is China's only endemic wild cat species. They are adapted to high-altitude environments and have thick fur to protect them from cold temperatures.",
    characteristics: {
      weight: "5.5-9 kg",
      length: "0.69-0.84 m",
      lifespan: "Unknown",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["China"],
      environment: "Alpine meadows, coniferous forests, shrublands",
      territory: "Unknown",
      coordinates: [
        { lat: 33.0, lng: 101.0, name: "Qinghai Province" },
        { lat: 36.0, lng: 103.0, name: "Gansu Province" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "2,500-10,000",
      threats: ["Habitat loss", "Poisoning", "Prey depletion"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "China's only endemic wild cat",
      "Live at altitudes up to 5,000 meters",
      "Have thick fur for cold protection"
    ]
  },
  {
    id: "pallas-cat",
    name: "Pallas's Cat",
    scientificName: "Otocolobus manul",
    category: "Small Wild Cat",
    shortDescription: "The expressive small cat with the longest and densest fur of any wild cat.",
    description: "Pallas's Cat, also known as Manul, is a small wild cat with the longest and densest fur of any wild cat. Their expressive faces and stocky build make them easily recognizable. They are adapted to cold, arid environments.",
    characteristics: {
      weight: "2.5-4.5 kg",
      length: "0.46-0.65 m",
      lifespan: "11-12 years",
      speed: "16 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central Asia"],
      environment: "Steppes, grasslands, montane areas",
      territory: "2-98 km²",
      coordinates: [
        { lat: 47.0, lng: 107.0, name: "Mongolian Steppes" },
        { lat: 42.0, lng: 80.0, name: "Altai Mountains" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat degradation", "Hunting", "Prey depletion"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have the longest and densest fur of any wild cat",
      "Their pupils are round, not slit-like",
      "Are very slow runners"
    ]
  },
  {
    id: "rusty-spotted-cat",
    name: "Rusty-spotted Cat",
    scientificName: "Prionailurus rubiginosus",
    category: "Small Wild Cat",
    shortDescription: "One of the world's smallest wild cats, known for their incredible agility and climbing skills.",
    description: "The Rusty-spotted Cat is one of the world's smallest wild cats, native to India and Sri Lanka. Despite their small size, they are incredibly agile and excellent climbers, often called the 'hummingbird of the cat family.'",
    characteristics: {
      weight: "0.9-1.6 kg",
      length: "0.35-0.48 m",
      lifespan: "12 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["India", "Sri Lanka"],
      environment: "Dry deciduous forests, grasslands, scrublands",
      territory: "0.16-0.74 km²",
      coordinates: [
        { lat: 15.0, lng: 76.0, name: "Western Ghats" },
        { lat: 7.0, lng: 81.0, name: "Sri Lankan Highlands" }
      ]
    },
    conservation: {
      status: "Near Threatened",
      population: "Unknown",
      threats: ["Habitat loss", "Agriculture expansion", "Human disturbance"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "One of the world's smallest wild cats",
      "Called the 'hummingbird of the cat family'",
      "Can climb trees with incredible agility"
    ]
  },
  {
    id: "fishing-cat",
    name: "Fishing Cat",
    scientificName: "Prionailurus viverrinus",
    category: "Small Wild Cat",
    shortDescription: "The swimming cat that loves water and is an expert fisher with webbed paws.",
    description: "The Fishing Cat is a medium-sized wild cat that loves water and is an excellent swimmer. They have partially webbed paws and are skilled at catching fish, which makes up a significant portion of their diet.",
    characteristics: {
      weight: "5-16 kg",
      length: "0.57-0.78 m",
      lifespan: "10-12 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["South Asia", "Southeast Asia"],
      environment: "Wetlands, mangroves, rivers, lakes",
      territory: "4-6 km²",
      coordinates: [
        { lat: 23.0, lng: 90.0, name: "Sundarbans" },
        { lat: 7.0, lng: 81.0, name: "Sri Lankan Wetlands" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "2,500-10,000",
      threats: ["Wetland destruction", "Pollution", "Human encroachment"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have partially webbed paws",
      "Are excellent swimmers",
      "Can dive underwater to catch fish"
    ]
  },
  {
    id: "flat-headed-cat",
    name: "Flat-headed Cat",
    scientificName: "Prionailurus planiceps",
    category: "Small Wild Cat",
    shortDescription: "The semi-aquatic cat with a flattened skull, adapted for fishing in shallow waters.",
    description: "The Flat-headed Cat is a small, semi-aquatic wild cat with a distinctive flattened skull. They are adapted for fishing in shallow waters and have partially webbed paws and water-resistant fur.",
    characteristics: {
      weight: "1.5-2.5 kg",
      length: "0.41-0.50 m",
      lifespan: "14 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Southeast Asia"],
      environment: "Tropical forests near water, wetlands",
      territory: "Unknown",
      coordinates: [
        { lat: 3.0, lng: 113.0, name: "Borneo" },
        { lat: 2.0, lng: 102.0, name: "Sumatra" }
      ]
    },
    conservation: {
      status: "Endangered",
      population: "2,500",
      threats: ["Habitat loss", "Water pollution", "Palm oil plantations"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have a distinctively flattened skull",
      "Are semi-aquatic",
      "Have water-resistant fur"
    ]
  },
  {
    id: "leopard-cat",
    name: "Leopard Cat",
    scientificName: "Prionailurus bengalensis",
    category: "Small Wild Cat",
    shortDescription: "The most widespread Asian small cat, ancestor of the Bengal domestic cat breed.",
    description: "The Leopard Cat is the most widespread small wild cat in Asia. They are excellent climbers and swimmers, and are the wild ancestor of the Bengal domestic cat breed through hybridization programs.",
    characteristics: {
      weight: "0.55-7.1 kg",
      length: "0.38-0.66 m",
      lifespan: "13 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Asia"],
      environment: "Forests, grasslands, agricultural areas",
      territory: "1.5-7.5 km²",
      coordinates: [
        { lat: 35.0, lng: 105.0, name: "Central China" },
        { lat: 1.0, lng: 103.0, name: "Southeast Asia" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Hunting for fur", "Road accidents"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Most widespread Asian small cat",
      "Ancestor of Bengal domestic cats",
      "Excellent climbers and swimmers"
    ]
  },
  {
    id: "sunda-clouded-leopard",
    name: "Sunda Clouded Leopard",
    scientificName: "Neofelis diardi",
    category: "Wild Cat",
    shortDescription: "The mysterious clouded leopard of Southeast Asia with the longest canine teeth relative to body size.",
    description: "The Sunda Clouded Leopard is a medium-sized wild cat found in Southeast Asia. They have the longest canine teeth relative to body size of any living cat and are excellent climbers with flexible ankle joints.",
    characteristics: {
      weight: "12-25 kg",
      length: "0.68-1.08 m",
      lifespan: "11 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Southeast Asia"],
      environment: "Tropical rainforests",
      territory: "Unknown",
      coordinates: [
        { lat: 3.0, lng: 113.0, name: "Borneo" },
        { lat: 2.0, lng: 102.0, name: "Sumatra" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "4,500-10,000",
      threats: ["Deforestation", "Palm oil plantations", "Hunting"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have the longest canine teeth relative to body size",
      "Can rotate their ankles to climb down trees head-first",
      "Are excellent climbers"
    ]
  },
  {
    id: "clouded-leopard",
    name: "Clouded Leopard",
    scientificName: "Neofelis nebulosa",
    category: "Wild Cat",
    shortDescription: "The tree-dwelling cat with cloud-like markings and exceptional climbing abilities.",
    description: "The Clouded Leopard is a medium-sized wild cat with distinctive cloud-like markings on their coat. They are exceptional climbers and spend much of their time in trees, hunting both on the ground and in the canopy.",
    characteristics: {
      weight: "11-23 kg",
      length: "0.68-1.08 m",
      lifespan: "11 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Southeast Asia", "China", "India"],
      environment: "Tropical and subtropical forests",
      territory: "30-40 km²",
      coordinates: [
        { lat: 27.0, lng: 88.0, name: "Eastern Himalayas" },
        { lat: 16.0, lng: 107.0, name: "Southeast Asian Forests" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "10,000",
      threats: ["Deforestation", "Poaching", "Habitat fragmentation"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have cloud-like markings on their coat",
      "Can hang upside down from branches",
      "Have flexible ankle joints for climbing"
    ]
  },
  {
    id: "bay-cat",
    name: "Bay Cat",
    scientificName: "Catopuma badia",
    category: "Wild Cat",
    shortDescription: "The mysterious endemic cat of Borneo, one of the world's least known wild cats.",
    description: "The Bay Cat is endemic to Borneo and is one of the world's least known wild cats. They inhabit dense tropical rainforests and are rarely seen, making them one of the most mysterious feline species.",
    characteristics: {
      weight: "3-4 kg",
      length: "0.49-0.67 m",
      lifespan: "Unknown",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Borneo"],
      environment: "Tropical rainforests",
      territory: "Unknown",
      coordinates: [
        { lat: 1.0, lng: 114.0, name: "Borneo Rainforest" }
      ]
    },
    conservation: {
      status: "Endangered",
      population: "2,500",
      threats: ["Deforestation", "Palm oil plantations", "Habitat loss"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Endemic to Borneo",
      "One of the world's least known wild cats",
      "Rarely photographed in the wild"
    ]
  },
  {
    id: "asian-golden-cat",
    name: "Asian Golden Cat",
    scientificName: "Catopuma temminckii",
    category: "Wild Cat",
    shortDescription: "The golden cat of Asia with highly variable coat colors and patterns.",
    description: "The Asian Golden Cat is a medium-sized wild cat found throughout Asia. They have highly variable coat colors ranging from golden to black, and are excellent climbers and swimmers.",
    characteristics: {
      weight: "9-16 kg",
      length: "0.66-1.05 m",
      lifespan: "18-20 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Southeast Asia", "China", "India"],
      environment: "Tropical and subtropical forests",
      territory: "32-48 km²",
      coordinates: [
        { lat: 28.0, lng: 85.0, name: "Himalayas" },
        { lat: 3.0, lng: 102.0, name: "Southeast Asian Forests" }
      ]
    },
    conservation: {
      status: "Near Threatened",
      population: "Unknown",
      threats: ["Deforestation", "Hunting", "Habitat fragmentation"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have highly variable coat colors",
      "Are excellent climbers and swimmers",
      "Can live up to 20 years"
    ]
  },
  {
    id: "african-golden-cat",
    name: "African Golden Cat",
    scientificName: "Caracal aurata",
    category: "Wild Cat",
    shortDescription: "The forest cat of Africa with a golden coat and exceptional climbing abilities.",
    description: "The African Golden Cat is a medium-sized wild cat found in the rainforests of West and Central Africa. They have a beautiful golden coat and are excellent climbers, spending much time in trees.",
    characteristics: {
      weight: "5.5-16 kg",
      length: "0.61-1.01 m",
      lifespan: "12 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["West Africa", "Central Africa"],
      environment: "Tropical rainforests",
      territory: "4-32 km²",
      coordinates: [
        { lat: 0.0, lng: 15.0, name: "Congo Basin" },
        { lat: 7.0, lng: -8.0, name: "West African Forests" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "Unknown",
      threats: ["Deforestation", "Hunting", "Habitat loss"]
    },
    images: ["/assets/images/african_golden_cat.png"],
    funFacts: [
      "Have a beautiful golden coat",
      "Are excellent climbers",
      "Live in African rainforests"
    ]
  },
  {
    id: "andean-cat",
    name: "Andean Cat",
    scientificName: "Leopardus jacobita",
    category: "Small Wild Cat",
    shortDescription: "The high-altitude specialist of the Andes, one of the world's most endangered cats.",
    description: "The Andean Cat is one of the world's most endangered wild cats, found only in the high Andes mountains. They are perfectly adapted to high-altitude life and are considered sacred by local indigenous peoples.",
    characteristics: {
      weight: "4-7 kg",
      length: "0.58-0.85 m",
      lifespan: "16 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Andes Mountains"],
      environment: "High-altitude rocky areas, alpine zones",
      territory: "65-87 km²",
      coordinates: [
        { lat: -22.0, lng: -67.0, name: "Bolivian Andes" },
        { lat: -30.0, lng: -70.0, name: "Chilean Andes" }
      ]
    },
    conservation: {
      status: "Endangered",
      population: "1,378-2,500",
      threats: ["Habitat loss", "Prey depletion", "Mining activities"]
    },
    images: ["/assets/images/andean_cat.png"],
    funFacts: [
      "One of the world's most endangered cats",
      "Live at altitudes up to 5,000 meters",
      "Considered sacred by indigenous peoples"
    ]
  },
  {
    id: "pampas-cat",
    name: "Pampas Cat",
    scientificName: "Leopardus colocola",
    category: "Small Wild Cat",
    shortDescription: "The adaptable South American cat with highly variable coat patterns and colors.",
    description: "The Pampas Cat is a small wild cat found across South America. They have highly variable coat patterns and colors, and are adaptable to various habitats from grasslands to forests.",
    characteristics: {
      weight: "3-7 kg",
      length: "0.46-0.75 m",
      lifespan: "16-17 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["South America"],
      environment: "Grasslands, scrublands, forests",
      territory: "Unknown",
      coordinates: [
        { lat: -35.0, lng: -65.0, name: "Argentine Pampas" },
        { lat: -15.0, lng: -60.0, name: "Brazilian Cerrado" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Habitat loss", "Hunting", "Road accidents"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have highly variable coat patterns",
      "Are adaptable to various habitats",
      "Can live up to 17 years"
    ]
  },
  {
    id: "southern-tiger-cat",
    name: "Southern Tiger Cat",
    scientificName: "Leopardus guttulus",
    category: "Small Wild Cat",
    shortDescription: "The small spotted cat of southern South America, recently recognized as a separate species.",
    description: "The Southern Tiger Cat was recently recognized as a separate species from the Oncilla. They are small spotted cats found in southern South America and are primarily terrestrial hunters.",
    characteristics: {
      weight: "1.8-2.8 kg",
      length: "0.40-0.55 m",
      lifespan: "Unknown",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Southern Brazil", "Argentina", "Paraguay"],
      environment: "Atlantic forests, grasslands",
      territory: "Unknown",
      coordinates: [
        { lat: -25.0, lng: -50.0, name: "Atlantic Forest" },
        { lat: -27.0, lng: -55.0, name: "Argentine Mesopotamia" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "Unknown",
      threats: ["Deforestation", "Habitat fragmentation", "Agriculture"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Recently recognized as separate species",
      "Primarily terrestrial hunters",
      "Found in Atlantic forests"
    ]
  },
  {
    id: "tiger-cat",
    name: "Tiger Cat",
    scientificName: "Leopardus tigrinus",
    category: "Small Wild Cat",
    shortDescription: "The northern tiger cat, a small spotted feline of Central and South American cloud forests.",
    description: "The Tiger Cat, also known as the Northern Tiger Cat or Little Spotted Cat, is a small wild cat found in Central and South America. They are excellent climbers and primarily arboreal, spending most of their time in the forest canopy.",
    characteristics: {
      weight: "1.8-3.5 kg",
      length: "0.38-0.59 m",
      lifespan: "11-17 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Central America", "Northern South America"],
      environment: "Cloud forests, montane forests",
      territory: "0.8-17 km²",
      coordinates: [
        { lat: 10.0, lng: -84.0, name: "Costa Rican Cloud Forest" },
        { lat: 5.0, lng: -75.0, name: "Colombian Andes" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "Unknown",
      threats: ["Deforestation", "Habitat fragmentation", "Hunting"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Primarily arboreal lifestyle",
      "Have the largest eyes relative to head size",
      "Excellent climbers with semi-retractable claws"
    ]
  },
  {
    id: "guina",
    name: "Güiña",
    scientificName: "Leopardus guigna",
    category: "Small Wild Cat",
    shortDescription: "The smallest wild cat in the Americas, also known as Kodkod, endemic to Chile and Argentina.",
    description: "The Güiña, also called Kodkod, is the smallest wild cat in the Americas. Endemic to the temperate rainforests of Chile and small parts of Argentina, they are excellent climbers and primarily nocturnal hunters.",
    characteristics: {
      weight: "1.5-3.0 kg",
      length: "0.37-0.51 m",
      lifespan: "11 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Chile", "Argentina"],
      environment: "Temperate rainforests, bamboo forests",
      territory: "1.1-2.5 km²",
      coordinates: [
        { lat: -39.0, lng: -73.0, name: "Valdivian Temperate Rainforest" },
        { lat: -42.0, lng: -71.0, name: "Argentine Patagonia" }
      ]
    },
    conservation: {
      status: "Vulnerable",
      population: "9,000-12,000",
      threats: ["Deforestation", "Habitat fragmentation", "Domestic dog attacks"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Smallest wild cat in the Americas",
      "Can climb trees with trunks up to 2 meters in diameter",
      "Primarily nocturnal and arboreal"
    ]
  },
  {
    id: "borneo-bay-cat",
    name: "Borneo Bay Cat",
    scientificName: "Catopuma badia",
    category: "Wild Cat",
    shortDescription: "The mysterious endemic cat of Borneo, one of the world's least studied wild cats.",
    description: "The Borneo Bay Cat is endemic to the island of Borneo and is one of the world's least known and most mysterious wild cats. They inhabit dense tropical rainforests and are extremely rare, making scientific study challenging.",
    characteristics: {
      weight: "3-4 kg",
      length: "0.49-0.67 m",
      lifespan: "Unknown",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Borneo"],
      environment: "Dense tropical rainforests",
      territory: "Unknown",
      coordinates: [
        { lat: 1.5, lng: 114.0, name: "Borneo Rainforest" },
        { lat: 0.5, lng: 113.5, name: "Central Kalimantan" }
      ]
    },
    conservation: {
      status: "Endangered",
      population: "2,500",
      threats: ["Deforestation", "Palm oil plantations", "Habitat destruction"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "One of the world's least studied wild cats",
      "Endemic only to Borneo",
      "First photographed in the wild only in 1998"
    ]
  },
  {
    id: "iriomote-cat",
    name: "Iriomote Cat",
    scientificName: "Prionailurus bengalensis iriomotensis",
    category: "Small Wild Cat",
    shortDescription: "The critically endangered island cat found only on Iriomote Island in Japan.",
    description: "The Iriomote Cat is a subspecies of the Leopard Cat found only on Iriomote Island in Japan. With fewer than 250 individuals remaining, it is one of the world's most endangered cats and a symbol of Japanese wildlife conservation.",
    characteristics: {
      weight: "3-5 kg",
      length: "0.50-0.60 m",
      lifespan: "Unknown",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Japan"],
      environment: "Subtropical forests, mangroves",
      territory: "1-3 km²",
      coordinates: [
        { lat: 24.3, lng: 123.8, name: "Iriomote Island" }
      ]
    },
    conservation: {
      status: "Critically Endangered",
      population: "100-250",
      threats: ["Habitat loss", "Road accidents", "Tourism development"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Found only on one small Japanese island",
      "Discovered by science only in 1965",
      "Can swim and climb trees excellently"
    ]
  },
  {
    id: "canada-lynx",
    name: "Canada Lynx",
    scientificName: "Lynx canadensis",
    category: "Wild Cat",
    shortDescription: "The snowshoe-footed lynx of North America, specialized for hunting snowshoe hares.",
    description: "The Canada Lynx is a medium-sized wild cat with large, snowshoe-like paws that help them move through deep snow. They are specialized hunters of snowshoe hares, and their populations fluctuate with hare cycles.",
    characteristics: {
      weight: "8-17.3 kg",
      length: "0.8-1.1 m",
      lifespan: "14-16 years",
      speed: "80 km/h",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Canada", "Alaska", "Northern USA"],
      environment: "Boreal forests, taiga",
      territory: "15-50 km²",
      coordinates: [
        { lat: 60.0, lng: -110.0, name: "Canadian Boreal Forest" },
        { lat: 64.0, lng: -153.0, name: "Alaskan Taiga" }
      ]
    },
    conservation: {
      status: "Least Concern",
      population: "Unknown",
      threats: ["Climate change", "Habitat loss", "Trapping"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Have large, snowshoe-like paws",
      "Specialized hunters of snowshoe hares",
      "Population cycles with prey availability"
    ]
  },
  {
    id: "iberian-lynx",
    name: "Iberian Lynx",
    scientificName: "Lynx pardinus",
    category: "Wild Cat",
    shortDescription: "The most endangered cat species, endemic to the Iberian Peninsula with a remarkable recovery story.",
    description: "The Iberian Lynx is endemic to the Iberian Peninsula and was once the world's most endangered cat species. Thanks to intensive conservation efforts, their population has recovered from just 94 individuals in 2002 to over 1,100 today.",
    characteristics: {
      weight: "9-27 kg",
      length: "0.85-1.1 m",
      lifespan: "13 years",
      speed: "Unknown",
      diet: "Carnivore"
    },
    habitat: {
      regions: ["Spain", "Portugal"],
      environment: "Mediterranean woodlands, scrublands",
      territory: "10-20 km²",
      coordinates: [
        { lat: 38.0, lng: -4.0, name: "Andalusia" },
        { lat: 39.0, lng: -7.0, name: "Central Portugal" }
      ]
    },
    conservation: {
      status: "Endangered",
      population: "1,100+",
      threats: ["Habitat fragmentation", "Road accidents", "Disease"]
    },
    images: ["https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg"],
    funFacts: [
      "Was the world's most endangered cat",
      "Population recovered from 94 to 1,100+",
      "Primarily hunts European rabbits"
    ]
  }
];

export const getAllRegions = (): string[] => {
  const regions = new Set<string>();
  felines.forEach(feline => {
    feline.habitat.regions.forEach(region => regions.add(region));
  });
  return Array.from(regions).sort();
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  felines.forEach(feline => categories.add(feline.category));
  return Array.from(categories).sort();
};