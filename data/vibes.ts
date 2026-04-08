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
    label: "Natural sauna",
    imageUrl: "https://images.unsplash.com/photo-MDIFz8W9GKM?w=500&h=600&fit=crop&crop=center",
    rotation: 3,
  },
  {
    id: "hiking",
    label: "Hiking",
    imageUrl: "https://images.unsplash.com/photo-nyghAPuJQC8?w=500&h=600&fit=crop&crop=center",
    rotation: -2,
  },
  {
    id: "dinner",
    label: "Birthday dinner",
    imageUrl: "https://images.unsplash.com/photo-7wx1WznXcow?w=500&h=600&fit=crop&crop=center",
    rotation: 1.5,
  },
  {
    id: "coffee",
    label: "Morning coffee",
    imageUrl: "https://images.unsplash.com/photo-q1SgzwmvR1s?w=500&h=600&fit=crop&crop=center",
    rotation: -4,
  },
  {
    id: "kayaking",
    label: "Sea kayaking",
    imageUrl: "https://images.unsplash.com/photo-kFP7Ju6jahE?w=500&h=600&fit=crop&crop=center",
    rotation: 2.5,
  },
];
