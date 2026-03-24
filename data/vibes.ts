export interface VibeCard {
  id: string;
  label: string;
  imageUrl: string;
  rotation: number;
}

export const vibeCards: VibeCard[] = [
  {
    id: "bryggen",
    label: "Bryggen",
    imageUrl: "https://images.unsplash.com/photo-1755878008095-37b948fd2770?w=500&h=600&fit=crop&crop=center",
    rotation: -3,
  },
  {
    id: "funicular",
    label: "Fløibanen",
    imageUrl: "https://images.unsplash.com/photo-1544085311-11a028465b03?w=500&h=600&fit=crop&crop=center",
    rotation: 2,
  },
  {
    id: "fjord",
    label: "Fjord cruise",
    imageUrl: "https://images.unsplash.com/photo-1483192683197-083ca7511846?w=500&h=600&fit=crop&crop=center",
    rotation: -1.5,
  },
  {
    id: "sauna",
    label: "Nordic sauna",
    imageUrl: "https://images.unsplash.com/photo-1711602926032-837bb88cb7c5?w=500&h=600&fit=crop&crop=center",
    rotation: 3,
  },
  {
    id: "harbour",
    label: "Bergen harbour",
    imageUrl: "https://images.unsplash.com/photo-1698303651858-dca17145eb70?w=500&h=600&fit=crop&crop=center",
    rotation: -2,
  },
  {
    id: "dinner",
    label: "Birthday dinner",
    imageUrl: "https://images.unsplash.com/photo-1560088613-1bc2c78b26c7?w=500&h=600&fit=crop&crop=center",
    rotation: 1.5,
  },
  {
    id: "coffee",
    label: "Morning coffee",
    imageUrl: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=500&h=600&fit=crop&crop=center",
    rotation: -4,
  },
  {
    id: "mountains",
    label: "Bergen views",
    imageUrl: "https://images.unsplash.com/photo-1580946443359-1126222f9224?w=500&h=600&fit=crop&crop=center",
    rotation: 2.5,
  },
];
