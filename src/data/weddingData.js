export const weddingData = {
  couple: {
    bride: 'Emma',
    groom: 'Lucas',
    names: 'Emma & Lucas',
    initials: 'E & L',
  },
  wedding: {
    isoDate: '2026-12-12T15:30:00+08:00',
    endIsoDate: '2026-12-12T22:00:00+08:00',
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
  loveStory: [
    {
      title: 'How We Met',
      text: 'Our paths crossed unexpectedly, in the quiet kind of moment that somehow changes everything.',
      image: 'https://images.pexels.com/photos/10482982/pexels-photo-10482982.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'First Date',
      text: 'A simple coffee date turned into hours of laughter, easy conversation, and the feeling of coming home.',
      image: 'https://images.pexels.com/photos/27871413/pexels-photo-27871413.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'The Proposal',
      text: 'Under the warm evening lights, one question became the promise we had both been waiting for.',
      image: 'https://images.pexels.com/photos/34317953/pexels-photo-34317953.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      title: 'Forever Begins',
      text: 'And now we begin our forever together, surrounded by the people who made our love even brighter.',
      image: 'https://images.pexels.com/photos/9721886/pexels-photo-9721886.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
  ],
  timeline: [
    { time: '3:30 PM', title: 'Wedding Ceremony', subtitle: 'Garden Chapel', icon: 'rings' },
    { time: '4:30 PM', title: 'Cocktail Hour', subtitle: 'Sunset Terrace', icon: 'glass' },
    { time: '5:00 PM', title: 'Photo Session', subtitle: 'Rose Garden', icon: 'camera' },
    { time: '6:30 PM', title: 'Dinner Reception', subtitle: 'Grand Pavilion', icon: 'dinner' },
    { time: '8:00 PM', title: 'Dance Party', subtitle: 'Under the Stars', icon: 'music' },
  ],
  venues: [
    {
      id: 'church',
      type: 'The Church',
      title: 'Saint Mary Parish Church',
      description: 'Where we will exchange our vows and begin our forever.',
      image: 'https://images.pexels.com/photos/35107237/pexels-photo-35107237.jpeg?auto=compress&cs=tinysrgb&w=900',
      address: '123 Chapel Road, Tagaytay City, Cavite',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saint+Mary+Parish+Church+Tagaytay+City+Cavite',
      icon: 'church',
    },
    {
      id: 'reception',
      type: 'The Reception',
      title: 'The Glass Garden Estate',
      description: 'An elegant garden setting for dinner, celebration, and a night beneath the lights.',
      image: '/images/venue.png',
      address: '123 Champagne Avenue, Tagaytay City, Cavite',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=The+Glass+Garden+Estate+Tagaytay+City+Cavite',
      icon: 'dinner',
    },
  ],
  invitationUrl: 'https://wedding-website-v2-seven.vercel.app/',
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
  rsvp: {
    deadline: 'November 12, 2026',
    attendanceOptions: ['Yes', 'No', 'Maybe'],
    guestLimit: 5,
    mealOptions: ['Chicken', 'Fish', 'Vegetarian', 'No meal needed'],
  },
}
