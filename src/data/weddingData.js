export const weddingData = {
  couple: {
    bride: 'Emma',
    groom: 'Lucas',
    names: 'Emma & Lucas',
    initials: 'E L',
  },
  wedding: {
    isoDate: '2026-12-12T15:30:00+08:00',
    displayDate: 'Saturday, December 12, 2026',
    time: '3:30 PM',
    location: 'The Glass Garden Estate',
  },
  hero: {
    image: '/images/wedding-hero.png',
    eyebrow: 'We Do',
    invitation:
      'Together with their families invite you to their wedding celebration',
  },
  music: {
    title: 'Tahanan (Live at The Cozy Cove)',
    artist: 'El Manu, Jessy Kang, Jason Marvin',
    audioSrc: '/audio/tahanan-live-cozy-cove.mp3',
  },
  details: [
    { label: 'Date', value: 'December 12, 2026', note: 'Saturday' },
    { label: 'Ceremony', value: '3:30 PM', note: 'Garden chapel' },
    { label: 'Reception', value: '6:30 PM', note: 'Grand pavilion' },
    { label: 'Dress Code', value: 'Formal', note: 'Black, ivory, champagne' },
  ],
  timeline: [
    { time: '3:30 PM', title: 'Wedding Ceremony', icon: 'rings' },
    { time: '4:30 PM', title: 'Cocktail Hour', icon: 'glass' },
    { time: '5:00 PM', title: 'Photo Session', icon: 'camera' },
    { time: '6:30 PM', title: 'Dinner Reception', icon: 'dinner' },
    { time: '8:00 PM', title: 'Dance Party', icon: 'music' },
  ],
  venue: {
    name: 'The Glass Garden Estate',
    image: '/images/venue.png',
    address: '123 Champagne Avenue, Tagaytay City, Cavite',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tagaytay+City+Cavite',
  },
  dressCode: {
    label: 'Attire',
    title: 'The Dress Code',
    image: '/images/dress-code.png',
    note: 'Please avoid white, ivory, and black.',
    palette: [
      { name: 'Dusty Rose', hex: '#C9A0A0' },
      { name: 'Sage Green', hex: '#A8B89A' },
      { name: 'Champagne', hex: '#F5E6C8' },
      { name: 'Dusty Blue', hex: '#8FA8C8' },
    ],
  },
  prenupPhotos: [
    {
      id: 'garden-romance',
      src: 'https://images.pexels.com/photos/34317953/pexels-photo-34317953.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Elegant wedding couple in a romantic garden setting',
      featured: true,
    },
    {
      id: 'outdoor-walk',
      src: 'https://images.pexels.com/photos/27871413/pexels-photo-27871413.jpeg?auto=compress&cs=tinysrgb&w=700',
      alt: 'Couple walking outdoors through a lush garden',
      featured: false,
    },
    {
      id: 'garden-close-up',
      src: 'https://images.pexels.com/photos/10482982/pexels-photo-10482982.jpeg?auto=compress&cs=tinysrgb&w=700',
      alt: 'Elegant couple sharing a close garden moment',
      featured: false,
    },
    {
      id: 'venue-gazebo',
      src: 'https://images.pexels.com/photos/9721886/pexels-photo-9721886.jpeg?auto=compress&cs=tinysrgb&w=700',
      alt: 'Couple at an elegant garden wedding venue',
      featured: false,
    },
  ],
}
