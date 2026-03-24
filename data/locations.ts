import { type Category } from "@/lib/constants";

export interface Location {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription: string;
  address: string;
  lat: number;
  lng: number;
  priceRange?: string;
  area?: string;
  website?: string;
  tags?: string[];
  imageUrl?: string;
}

export const locations: Location[] = [
  // Accommodation
  {
    id: "airbnb",
    name: "Our Airbnb",
    category: "accommodation",
    description: "Home in Bergenhus, hosted by Simen",
    longDescription:
      "Our base for the trip. A house in central Bergenhus, right near the Fløyen funicular base station and a short walk to Bryggen. Checkout Monday 20th at 11:00.",
    address: "Øvre Fjellsmauet 12, Bergenhus",
    lat: 60.3975,
    lng: 5.3195,
    area: "Bergenhus",
  },

  // Coffee Shops
  {
    id: "det-lille-kaffekompaniet",
    name: "Det Lille Kaffekompaniet",
    category: "coffee",
    description: "Tiny, atmospheric hidden gem in Bryggen",
    longDescription:
      "Tucked into the alleyways of Bryggen, this minuscule cafe roasts its own beans. Feels like discovering a secret. Perfect for a quiet morning coffee.",
    address: "Øvregaten 2, Bergen",
    lat: 60.3977,
    lng: 5.3243,
    priceRange: "50-65 NOK",
    area: "Bryggen",
    imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop",
  },
  {
    id: "kaffemisjonen",
    name: "Kaffemisjonen",
    category: "coffee",
    description: "Bergen's best specialty coffee shop",
    longDescription:
      "Arguably Bergen's best specialty coffee shop. Known for exceptional single-origin pour-overs. The baristas really know their stuff. Small space, focused on the craft.",
    address: "Vaskerelven 16, Bergen",
    lat: 60.3885,
    lng: 5.3270,
    priceRange: "55-70 NOK",
    area: "Near university",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
  },
  {
    id: "blom",
    name: "Blom",
    category: "coffee",
    description: "Popular central cafe, great for groups",
    longDescription:
      "A well-loved central cafe with good specialty coffee and excellent pastries. Bigger space than some of the micro-roasters, so easier for a group.",
    address: "Kong Oscars gate 33, Bergen",
    lat: 60.3915,
    lng: 5.3280,
    priceRange: "50-65 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
  },
  {
    id: "kippers",
    name: "Kippers",
    category: "coffee",
    description: "Hip cafe in Bergen's creative quarter",
    longDescription:
      "Located in Skostredet — Bergen's arty/creative quarter. Great coffee alongside food. The area itself is worth exploring for street art and independent shops.",
    address: "Georgernes Verft 12, Bergen",
    lat: 60.3935,
    lng: 5.3175,
    priceRange: "50-65 NOK",
    area: "Skostredet",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
  },
  {
    id: "godt-brod",
    name: "Godt Brød",
    category: "coffee",
    description: "Outstanding organic bakery-cafe",
    longDescription:
      "Outstanding organic bread and pastries alongside solid coffee. The cinnamon buns and sourdough are the stars. Great for a coffee + pastry stop.",
    address: "Nedre Korskirkealmenningen 12, Bergen",
    lat: 60.3910,
    lng: 5.3255,
    priceRange: "50-60 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
  },
  {
    id: "dromedar",
    name: "Dromedar Kaffebar",
    category: "coffee",
    description: "Reliable specialty chain from Trondheim",
    longDescription:
      "Originally from Trondheim, known for reliable quality. Good if you want a dependable flat white without hunting for a specific shop. Pleasant, modern interiors.",
    address: "Torgallmenningen, Bergen",
    lat: 60.3920,
    lng: 5.3240,
    priceRange: "50-65 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=400&fit=crop",
  },

  // Lunch Spots
  {
    id: "pingvinen",
    name: "Pingvinen",
    category: "lunch",
    description: "Traditional Norwegian comfort food — a must-visit",
    longDescription:
      "THE place for authentic Norwegian comfort food. Meatballs, fish soup, cod, lamb stew. Cosy, unpretentious, beloved by locals. Can get busy so arrive early or book.",
    address: "Vaskerelven 14, Bergen",
    lat: 60.3883,
    lng: 5.3268,
    priceRange: "180-300 NOK",
    area: "Central Bergen",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  },
  {
    id: "fisketorget",
    name: "Fisketorget (Fish Market)",
    category: "lunch",
    description: "Bergen's famous indoor/outdoor fish market",
    longDescription:
      "A Bergen institution. Sample fresh seafood, fish & chips, the legendary fish soup, king crab legs. A bit touristy but a must-do at least once.",
    address: "Torget, Bergen",
    lat: 60.3945,
    lng: 5.3265,
    priceRange: "150-300 NOK",
    area: "Harbour front",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&h=400&fit=crop",
  },
  {
    id: "bryggeloftet",
    name: "Bryggeloftet & Stuene",
    category: "lunch",
    description: "Traditional Norwegian in a historic Bryggen building",
    longDescription:
      "Beautiful old building, proper sit-down lunch in a historic setting. Fish soup, open-faced sandwiches (smørbrød), traditional dishes.",
    address: "Bryggen 11, Bergen",
    lat: 60.3967,
    lng: 5.3240,
    priceRange: "200-350 NOK",
    area: "Bryggen",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&h=400&fit=crop",
  },
  {
    id: "zupperia",
    name: "Zupperia",
    category: "lunch",
    description: "Hearty soups — perfect for Bergen's weather",
    longDescription:
      "Hearty, warming soups perfect for Bergen's unpredictable weather. Good value by Bergen standards. Quick and satisfying.",
    address: "Strandgaten 2, Bergen",
    lat: 60.3930,
    lng: 5.3260,
    priceRange: "130-180 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
  },
  {
    id: "trekroneren",
    name: "Trekroneren",
    category: "lunch",
    description: "Legendary hot dog kiosk — a Bergen institution",
    longDescription:
      "A Bergen institution. Not just any hot dogs — proper Norwegian pølse with all the toppings. Cheap, quick, fun.",
    address: "Torget area, Bergen",
    lat: 60.3943,
    lng: 5.3258,
    priceRange: "80-120 NOK",
    area: "Near fish market",
    imageUrl: "https://images.unsplash.com/photo-1619740455993-9d701c6587e2?w=600&h=400&fit=crop",
  },
  {
    id: "lysverket-lunch",
    name: "Lysverket (Lunch)",
    category: "lunch",
    description: "Modern Nordic at KODE museum, casual lunch format",
    longDescription:
      "Get a taste of one of Bergen's best kitchens without the full fine dining price tag. Beautiful setting inside the museum. Great to combine with a KODE visit.",
    address: "KODE 4, Rasmus Meyers allé 9, Bergen",
    lat: 60.3890,
    lng: 5.3230,
    priceRange: "200-300 NOK",
    area: "Lille Lungegårdsvannet",
    imageUrl: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop",
  },

  // Dinner Restaurants
  {
    id: "pingvinen-dinner",
    name: "Pingvinen",
    category: "dinner",
    description: "Traditional Norwegian — cosy evening atmosphere",
    longDescription:
      "Everything that makes it a great lunch spot, but the dinner menu goes deeper. Lamb shank, bacalao, Norwegian meatballs with lingonberries. Cosy candlelit atmosphere.",
    address: "Vaskerelven 14, Bergen",
    lat: 60.3883,
    lng: 5.3268,
    priceRange: "200-300 NOK",
    area: "Central Bergen",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  },
  {
    id: "colonialen",
    name: "Colonialen Litteraturhuset",
    category: "dinner",
    description: "Modern Nordic bistro — refined but relaxed",
    longDescription:
      "Refined cooking without being stuffy. Seasonal Nordic ingredients, creative preparations. Nice wine list. Feels like a proper night out without the formality of fine dining.",
    address: "Østre Skostredet 5-7, Bergen",
    lat: 60.3930,
    lng: 5.3190,
    priceRange: "250-350 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
  },
  {
    id: "naboen",
    name: "Naboen",
    category: "dinner",
    description: "Lively neighbourhood favourite — great for groups",
    longDescription:
      "Lively atmosphere, good food, great for a group. Feels like somewhere locals actually go for dinner with friends. Great farewell/last night option.",
    address: "Sigurds gate 4, Bergen",
    lat: 60.3895,
    lng: 5.3280,
    priceRange: "250-350 NOK",
    area: "Central Bergen",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    id: "marg-bein",
    name: "Marg & Bein",
    category: "dinner",
    description: "Meat-focused with a modern approach",
    longDescription:
      "If the group wants a break from seafood. Quality meat dishes, interesting preparations. Good for meat lovers.",
    address: "Fosswinckels gate 18, Bergen",
    lat: 60.3875,
    lng: 5.3250,
    priceRange: "300-400 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
  },
  {
    id: "escalon",
    name: "Escalón",
    category: "dinner",
    description: "Tex-Mex / international — fun group vibes",
    longDescription:
      "Casual, fun, good for a group that wants something easy and familiar. Margaritas, sharing plates, good vibes.",
    address: "Neumanns gate 5, Bergen",
    lat: 60.3888,
    lng: 5.3275,
    priceRange: "200-300 NOK",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
  },

  // Birthday Dinner Options
  {
    id: "lysverket",
    name: "Lysverket",
    category: "birthday",
    description: "Modern Nordic fine dining inside KODE art museum",
    longDescription:
      "One of Bergen's most acclaimed restaurants. Chef Christopher Haatuft creates inventive Nordic dishes with stunning presentation. The setting inside the art museum is beautiful. Tasting menus take you on a journey through Norwegian ingredients. Perfect celebration restaurant.",
    address: "KODE 4, Rasmus Meyers allé 9, Bergen",
    lat: 60.3890,
    lng: 5.3230,
    priceRange: "1,200-1,500 NOK",
    area: "Lille Lungegårdsvannet",
    tags: ["birthday-option", "fine-dining", "must-book"],
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&h=400&fit=crop",
  },
  {
    id: "bare",
    name: "Bare Restaurant",
    category: "birthday",
    description: "Upscale seafood & Nordic — intimate atmosphere",
    longDescription:
      "Exceptional fish and seafood, beautifully presented. Intimate atmosphere with a strong focus on quality. Their tasting menu is a real showcase of Bergen's connection to the sea.",
    address: "Vetrlidsallmenningen 2, Bergen",
    lat: 60.3955,
    lng: 5.3245,
    priceRange: "800-1,200 NOK",
    area: "Central Bergen",
    tags: ["birthday-option", "seafood", "must-book"],
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
  },
  {
    id: "1877",
    name: "1877",
    category: "birthday",
    description: "Elegant fine dining in a historic building",
    longDescription:
      "Named for the year the building was constructed. Elegant, sophisticated setting. Multi-course tasting menus with wine pairings. Classic fine dining done with Norwegian flair.",
    address: "Vetrlidsallmenningen 2, Bergen",
    lat: 60.3952,
    lng: 5.3248,
    priceRange: "1,000-1,500 NOK",
    area: "Central Bergen",
    tags: ["birthday-option", "fine-dining", "must-book"],
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  },
  {
    id: "cornelius",
    name: "Cornelius Sjømatrestaurant",
    category: "birthday",
    description: "Seafood restaurant on a fjord island — boat transfer",
    longDescription:
      "The most unique option — you take a boat to get there (the restaurant arranges the transfer). Spectacular setting surrounded by water. Multi-course seafood feast. The journey itself is part of the celebration. Genuinely unforgettable. Check April availability.",
    address: "Holmen, Bergen (boat from Zachariasbryggen)",
    lat: 60.3640,
    lng: 5.2920,
    priceRange: "1,500+ NOK",
    area: "Fjord island",
    tags: ["birthday-option", "unique", "must-book", "seasonal"],
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
  },

  // Activities
  {
    id: "bryggen",
    name: "Bryggen",
    category: "activity",
    description: "UNESCO World Heritage wharf — colourful wooden buildings",
    longDescription:
      "The icon of Bergen. Colourful wooden buildings dating back to the Hanseatic trading days. Wander the narrow alleyways, browse the small shops and workshops. Free to walk around.",
    address: "Bryggen, Bergen",
    lat: 60.3972,
    lng: 5.3240,
    priceRange: "Free (museum ~100 NOK)",
    area: "Bryggen",
    imageUrl: "https://images.unsplash.com/photo-1534560164607-1b5ddc75b1f3?w=600&h=400&fit=crop",
  },
  {
    id: "floyen",
    name: "Fløibanen Funicular",
    category: "activity",
    description: "Funicular to Mount Fløyen — incredible panoramic views",
    longDescription:
      "Incredible panoramic views of Bergen, the harbour, and surrounding mountains. Walking trails at the top, a cafe, and a troll sculpture. The base station is very close to your house.",
    address: "Vetrlidsallmenningen 21, Bergen",
    lat: 60.3960,
    lng: 5.3284,
    priceRange: "~155 NOK return",
    area: "City centre",
    imageUrl: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&h=400&fit=crop",
  },
  {
    id: "bergenhus",
    name: "Bergenhus Fortress",
    category: "activity",
    description: "Medieval fortress with Håkon's Hall & Rosenkrantz Tower",
    longDescription:
      "Right by your accommodation. Beautiful grounds to walk around (free). The Hall and Tower are worth going inside for the history and views. One of the oldest royal residences in Norway.",
    address: "Bergenhus, Bergen",
    lat: 60.3990,
    lng: 5.3185,
    priceRange: "~100 NOK each, grounds free",
    area: "Bergenhus",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=400&fit=crop",
  },
  {
    id: "mostraumen",
    name: "Mostraumen Fjord Cruise",
    category: "activity",
    description: "3-hour cruise through narrow straits and fjord scenery",
    longDescription:
      "Experience the fjords without a full day trip. Dramatic scenery, waterfalls, narrow passages. Runs year-round. Operated by Rødne. Book in advance, dress warmly.",
    address: "Zachariasbryggen, Bergen",
    lat: 60.3943,
    lng: 5.3250,
    priceRange: "600-700 NOK",
    area: "Harbour",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
  },
  {
    id: "ulriken",
    name: "Mount Ulriken Cable Car",
    category: "activity",
    description: "Cable car to Bergen's highest mountain (643m)",
    longDescription:
      "Even more dramatic views than Fløyen. On a clear day you can see the ocean and mountain ranges. Cafe at the top. You can hike between Ulriken and Fløyen (~4-5 hours) but check for snow in April.",
    address: "Haukelandsbakken 40, Bergen",
    lat: 60.3770,
    lng: 5.3850,
    priceRange: "~200 NOK return",
    area: "East Bergen",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=400&fit=crop",
  },
  {
    id: "kode",
    name: "KODE Art Museums",
    category: "activity",
    description: "Four museum buildings — Munch, Astrup, and more",
    longDescription:
      "World-class art collection across four buildings. KODE 4 is the standout. Norwegian and international art including Edvard Munch and Nikolai Astrup. Beautiful location along the lake.",
    address: "Rasmus Meyers allé, Bergen",
    lat: 60.3890,
    lng: 5.3220,
    priceRange: "~150 NOK",
    area: "Lille Lungegårdsvannet",
    imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=400&fit=crop",
  },
  {
    id: "troldhaugen",
    name: "Troldhaugen — Edvard Grieg Museum",
    category: "activity",
    description: "Composer's lakeside home — beautiful grounds & recitals",
    longDescription:
      "The lakeside home of Norway's most famous composer. Beautiful setting, fascinating museum, and sometimes piano recitals in the concert hall. ~20 min from centre by light rail.",
    address: "Troldhaugvegen 65, Bergen",
    lat: 60.3470,
    lng: 5.3280,
    priceRange: "~150 NOK",
    area: "South Bergen (light rail)",
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd33c68d826d?w=600&h=400&fit=crop",
  },
  {
    id: "7fjell",
    name: "7 Fjell Bryggeri",
    category: "activity",
    description: "Bergen's notable craft brewery — tours & tastings",
    longDescription:
      "Tours and tastings of locally brewed craft beer. Good for a group activity. Learn about Norwegian brewing culture while sampling the goods.",
    address: "Bergen",
    lat: 60.3880,
    lng: 5.3300,
    priceRange: "200-300 NOK",
    area: "Bergen",
    imageUrl: "https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=600&h=400&fit=crop",
  },
  {
    id: "skostredet",
    name: "Skostredet — Creative Quarter",
    category: "activity",
    description: "Street art, vintage shops, and independent boutiques",
    longDescription:
      "Bergen's street art and independent creative district. Free to wander. Street art, vintage shops, independent boutiques, galleries. Good for an afternoon amble.",
    address: "Skostredet, Bergen",
    lat: 60.3935,
    lng: 5.3185,
    priceRange: "Free",
    area: "Skostredet",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
  },
  {
    id: "stoltzekleiven",
    name: "Stoltzekleiven",
    category: "activity",
    description: "900-step stairway — free workout with great views",
    longDescription:
      "900-step stairway up the mountainside. Popular with locals, great workout with rewarding views at the top. Not for the faint-hearted but very satisfying.",
    address: "Fjellveien, Bergen",
    lat: 60.4005,
    lng: 5.3350,
    priceRange: "Free",
    area: "North Bergen",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

export function getLocationsByCategory(category: Category): Location[] {
  return locations.filter((l) => l.category === category);
}
