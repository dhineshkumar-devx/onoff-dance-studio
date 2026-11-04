import logoImg from '../assets/images/logo.png';
import westernMasterImg from '../assets/images/trainer-western.png';
import classicalMasterImg from '../assets/images/trainer-classical.jpg';
import galleryStageTheatre from '../assets/gallery/gallery-stage-theatre.png';
import galleryStageAfda from '../assets/gallery/gallery-stage-afda.png';
import galleryStageSolo from '../assets/gallery/gallery-stage-solo.png';
import galleryGuruPosture from '../assets/gallery/gallery-guru-posture.png';
import galleryGuruSalangai from '../assets/gallery/gallery-guru-salangai.png';
import galleryGuruMudra from '../assets/gallery/gallery-guru-mudra.png';
import galleryGuruPortrait from '../assets/gallery/gallery-guru-portrait.png';

export const studioConfig = {
  name: "ON OFF DANCE STUDIO",
  shortName: "ODS",
  tagline: "Feel the Rhythm. Own the Stage.",
  subTagline: "Chennai's premier dance academy in Madipakkam. Directed by Gopinath.R & Natya Ilamani Guru Smt. Aishwarya Raja. Professional disciplines in Western, Classical Bharatanatyam, and Zumba.",
  
  contact: {
    address: "2/52, Raghava Nagar 9th Street, Madipakkam, Chennai - 91",
    landmark: "Near Madipakkam Bus Terminus",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600091",
    phones: ["8870356852", "9941878870"],
    primaryPhone: "8870356852",
    whatsapp: "8870356852",
    trainerGopinath: "8870356852",
    trainerAishwarya: "9941878870",
    email: "ods.dancechennai@gmail.com",
    workingHours: "Monday – Sunday: 6:00 AM – 9:30 PM",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9702229202685!2d80.198305!3d12.964722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d88691f1a5b%3A0x6b6c0e86b2d1847!2sRaghava%20Nagar%209th%20St%2C%20Madipakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600091!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=2/52,+Raghava+Nagar+9th+Street,+Madipakkam,+Chennai+-+600091"
  },

  assets: {
    logo: logoImg,
    westernMaster: westernMasterImg,
    classicalMaster: classicalMasterImg,
    galleryStageTheatre,
    galleryStageAfda,
    galleryStageSolo,
    galleryGuruPosture,
    galleryGuruSalangai,
    galleryGuruMudra,
    galleryGuruPortrait,
  },

  socials: [
    { name: "Instagram", href: "https://www.instagram.com/on_off_dancestudio/", handle: "@on_off_dancestudio", icon: "Instagram" },
    { name: "WhatsApp", href: "https://wa.me/918870356852?text=Hi%20ON%20OFF%20DANCE%20STUDIO%2C%20I%20would%20like%20to%20enquire%20about%20batch%20admissions!", icon: "MessageCircle" },
    { name: "YouTube", href: "https://youtube.com/@onoffdancestudio", icon: "Youtube" },
    { name: "Facebook", href: "https://facebook.com/onoffdancestudio", icon: "Facebook" }
  ],

  stats: [
    { label: "Graduated Dancers", value: "1,500+" },
    { label: "Years Experience", value: "9+ Yrs" },
    { label: "Dance Disciplines", value: "8+" },
    { label: "Stage Productions", value: "120+" }
  ],

  batches: [
    {
      id: "junior",
      name: "Junior Batch",
      ageGroup: "Ages 4 – 12",
      badge: "Kids & Pre-Teens",
      tagline: "Rhythm foundation, motor coordination & stage confidence",
      description: "Building musicality, posture, discipline, and performance courage in a positive, high-energy environment.",
      highlights: ["Rhythm & posture fundamentals", "Choreography routines", "Annual stage showcase", "Certified level exams"]
    },
    {
      id: "adult",
      name: "Adult Batch",
      ageGroup: "Ages 13 – 35",
      badge: "Teens & Youth",
      tagline: "Power choreography, freestyle mastery & crew training",
      description: "Intensive training focusing on technical precision, complex footwork, body isolation, and stage performance.",
      highlights: ["Advanced routines", "Body isolation & groove drills", "Battle & cipher mechanics", "Performance crew training"]
    },
    {
      id: "senior",
      name: "Senior Batch",
      ageGroup: "Ages 35+",
      badge: "Adults & Seniors",
      tagline: "Holistic fitness, joint mobility & classical grace",
      description: "Designed for posture, cardiovascular health, gentle flexibility, and the pure joy of movement.",
      highlights: ["Low-impact conditioning", "Mindful posture & core balance", "Community dance sessions", "Stress-relief evening slots"]
    }
  ],

  // Dance Styles
  danceStyles: [
    {
      id: "western",
      name: "Western Dance & Freestyle",
      category: "Core Discipline",
      badge: "Lead: Gopinath.R",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80",
      summary: "High-octane urban choreography, popping, freezes, locking, and contemporary street flow.",
      description: "Under the direct mentorship of Gopinath.R, master cutting-edge street beats, freezes, and dynamic urban routines.",
      levels: ["Beginner", "Intermediate", "Advanced Crew"],
      targetAges: "Junior, Adult & Senior Batches",
      duration: "60 - 90 min / class",
      accentColor: "copper",
      features: [
        "Street Hip-Hop & Popping / Locking",
        "Acrobatic freezes & athletic balance",
        "Stage performance choreographies",
        "Freestyle cyphers and musicality"
      ]
    },
    {
      id: "classical",
      name: "Classical Bharatanatyam",
      category: "Traditional Heritage",
      badge: "Lead: Guru Smt. Aishwarya Raja",
      image: galleryGuruPosture,
      summary: "Timeless South Indian classical art form emphasizing Natya, Mudras, Adavus, and sacred expression.",
      description: "Guided by Natya Ilamani Guru Smt. Aishwarya Raja, master the geometric precision of Adavus, soulful Abhinaya, and complex Tala calculations.",
      levels: ["Prarambha (Basic)", "Madhyama (Inter)", "Arangetram Guidance"],
      targetAges: "Junior, Adult & Senior Batches",
      duration: "60 - 90 min / class",
      accentColor: "silver",
      features: [
        "Classical Mudras (Hastabhinaya) & Adavus",
        "Tala (rhythm beats) & Nattuvangam",
        "Abhinaya (facial expression)",
        "Temple & Sabhas stage opportunities"
      ]
    },
    {
      id: "zumba",
      name: "Zumba & Dance Fitness",
      category: "Fitness & Wellness",
      badge: "High Energy",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      summary: "Calorie-burning dance cardio routines set to infectious Latin, Bollywood, and Afro rhythms.",
      description: "Get fit while grooving! Pure energy, stamina, core conditioning, and joyful movement.",
      levels: ["All Fitness Levels Welcome"],
      targetAges: "Adult & Senior Batches",
      duration: "60 min / class",
      accentColor: "copper",
      features: [
        "Cardio conditioning & muscle toning",
        "Burn 500-800 kcal per session",
        "Easy-to-follow high-energy steps",
        "Morning & Evening flexible slots"
      ]
    },
    {
      id: "hip-hop",
      name: "Hip-Hop & Urban Street",
      category: "Street Culture",
      badge: "Dynamic",
      image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1000&q=80",
      summary: "Authentic hip-hop foundations, bounce, wave dynamics, and crew synchronization.",
      description: "Learn choreography seen in viral dance videos, transitions, and stage performance timing.",
      levels: ["All Levels"],
      targetAges: "Junior & Adult Batches",
      duration: "60 min / class",
      accentColor: "copper",
      features: [
        "Bounce, slide, and wave footwork",
        "Performance choreography drills",
        "Street battle presence & musicality",
        "Urban stage routines"
      ]
    },
    {
      id: "bollywood",
      name: "Bollywood & Cinematic",
      category: "Showtime Style",
      badge: "Crowd Favorite",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80",
      summary: "Electrifying commercial dance, South-Indian mass kuthu beats, and theatrical Bollywood glamour.",
      description: "High energy, expressive storytelling, dramatic drops, and mass entertainment choreography.",
      levels: ["Beginner to Performer"],
      targetAges: "Junior, Adult & Senior Batches",
      duration: "60 min / class",
      accentColor: "silver",
      features: [
        "Trending chartbuster choreos",
        "South mass kuthu & party steps",
        "Expressions and facial storytelling",
        "Stage performance ready"
      ]
    },
    {
      id: "contemporary",
      name: "Contemporary & Lyrical",
      category: "Artistic Flow",
      badge: "Soulful",
      image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1000&q=80",
      summary: "Seamless blend of modern dance, floorwork technique, emotional breath control, and release.",
      description: "Express your musicality through fluid transitions, extensions, and narrative movement.",
      levels: ["Beginner to Advanced"],
      targetAges: "Junior & Adult Batches",
      duration: "60 min / class",
      accentColor: "copper",
      features: [
        "Floorwork and release technique",
        "Emotional storytelling & musicality",
        "Flexibility and spine articulation",
        "Solo and group stage pieces"
      ]
    }
  ],

  // EXACTLY TWO MASTERS ONLY: Gopinath.R and Natya Ilamani Guru. smt.Aishwarya Raja
  trainers: [
    {
      id: "trainer-classical",
      name: "Natya Ilamani Guru. smt.Aishwarya Raja",
      shortName: "Guru Smt. Aishwarya Raja",
      title: "Natya Ilamani Guru",
      degrees: ["B.E.", "Dip in Bharatanatyam", "MFA in Bharatanatyam"],
      role: "Bharatanatyam",
      designation: "Bharatanatyam Acharya & Classical Director",
      specialty: "Classical Bharatanatyam, Nattuvangam, Abhinaya & Margam Repertoire",
      experience: "MFA in Bharatanatyam • 12+ Yrs Discipline",
      image: classicalMasterImg,
      quote: "Preserving the sacred geometry, rhythmic tala, and divine abhinaya of Bharatanatyam.",
      bio: "Conferred the revered title 'Natya Ilamani', Guru Smt. Aishwarya Raja holds an MFA in Bharatanatyam, Diploma in Bharatanatyam, and B.E. With profound mastery over Tala rhythmics, Nattuvangam, and emotive Abhinaya, she guides disciples with academic rigor and devotional passion.",
      achievements: [
        "Conferred the prestigious title 'Natya Ilamani' for classical mastery",
        "Holds B.E., Diploma in Bharatanatyam & MFA in Bharatanatyam",
        "Guided 25+ successful Arangetram disciples and Margazhi Sabha recitals",
        "Mastery in Tala Nattuvangam, Navarasa expressions & traditional Margam"
      ],
      social: "@aishwaryaraja_ods"
    },
    {
      id: "trainer-western",
      name: "Gopinath.R",
      shortName: "Gopinath.R",
      title: "Choreographer & Media Artist",
      degrees: ["Freestyle Dancer", "Choreographer", "Media Artist"],
      role: "Freestyle & Cinematic Dancer | Choreographer | Media Artist",
      designation: "Freestyle & Cinematic Dancer | Choreographer | Media Artist",
      specialty: "Freestyle, Cinematic, Urban Hip-Hop, Screen & Stage Choreography",
      experience: "Freestyle & Cinematic Master • 10+ Yrs Mastery",
      image: westernMasterImg,
      quote: "Igniting raw freestyle power, cinematic musicality, and high-impact stage presence.",
      bio: "Celebrated choreographer and media artist Gopinath.R spearheads the Western and cinematic movement at ON OFF DANCE STUDIO. Renowned for electrifying screen choreography, freestyle street battles, and signature commercial routines seen across Tamil media productions.",
      achievements: [
        "Freestyle & Cinematic Choreographer for Media, Screen & Music Productions",
        "Stage Director and Lead Choreographer for major live shows and artist tours",
        "Specialist in Hip-Hop foundations, Popping, Locking & Cinematic mass routines",
        "Championship mentor for elite dance crews and competitive battle dancers"
      ],
      social: "@gopinath_ods"
    }
  ],

  schedule: {
    junior: [
      { day: "Mon / Wed / Fri", time: "05:00 PM – 06:00 PM", style: "Western & Street Foundations", trainer: "Gopinath.R", hall: "Studio A" },
      { day: "Tue / Thu / Sat", time: "05:00 PM – 06:00 PM", style: "Classical Bharatanatyam (Junior)", trainer: "Guru Smt. Aishwarya Raja", hall: "Studio B" },
      { day: "Saturday & Sunday", time: "10:00 AM – 11:30 AM", style: "Kids Bollywood & Free Movement", trainer: "ODS Faculty", hall: "Studio A" },
    ],
    adult: [
      { day: "Mon / Wed / Fri", time: "06:30 PM – 07:45 PM", style: "Western Urban & Hip-Hop Advanced", trainer: "Gopinath.R", hall: "Studio A" },
      { day: "Tue / Thu / Sat", time: "06:30 PM – 07:45 PM", style: "Classical Bharatanatyam (Varnam & Tillana)", trainer: "Guru Smt. Aishwarya Raja", hall: "Studio B" },
      { day: "Mon – Fri (Daily)", time: "07:00 AM – 08:00 AM", style: "Morning Zumba Energy Blast", trainer: "ODS Faculty", hall: "Studio A" },
      { day: "Saturday & Sunday", time: "04:30 PM – 06:30 PM", style: "Weekend Crew Choreography & Cyphers", trainer: "Gopinath.R", hall: "Studio A" },
    ],
    senior: [
      { day: "Mon / Wed / Fri", time: "08:00 AM – 09:00 AM", style: "Senior Mobility & Low-Impact Zumba", trainer: "ODS Faculty", hall: "Studio A" },
      { day: "Tue / Thu / Sat", time: "08:00 AM – 09:00 AM", style: "Classical Yoga-Dance & Posture Alignment", trainer: "Guru Smt. Aishwarya Raja", hall: "Studio B" },
      { day: "Mon / Wed / Fri", time: "07:45 PM – 08:45 PM", style: "Evening Stress Relief & Classical Flow", trainer: "Guru Smt. Aishwarya Raja", hall: "Studio B" },
    ]
  },

  features: [
    {
      icon: "Award",
      title: "Master Choreographers",
      description: "Direct mentorship by Gopinath.R and Natya Ilamani Guru Smt. Aishwarya Raja, ensuring authentic technique and artistic mastery."
    },
    {
      icon: "ShieldCheck",
      title: "Sprung Wooden Flooring",
      description: "Acoustics-treated, air-conditioned studio designed to protect joints and absorb landing shocks."
    },
    {
      icon: "Clock",
      title: "Convenient Batches",
      description: "Dedicated morning and evening slots for Juniors (4-12 yrs), Adults (13-35 yrs), and Seniors (35+ yrs)."
    },
    {
      icon: "Sparkles",
      title: "100% Stage Opportunity",
      description: "Guaranteed participation in annual theater productions, cultural sabhas, and state-level events."
    },
    {
      icon: "Users",
      title: "Capped Batch Sizes",
      description: "Strict student-to-master ratios to ensure individualized feedback and accelerated learning."
    },
    {
      icon: "HeartHandshake",
      title: "Inspiring Culture",
      description: "A welcoming, zero-judgment atmosphere where passion transforms into performance."
    }
  ],

  testimonials: [
    {
      name: "Karthik Rajendran",
      role: "Parent of Diya (Junior Batch, Madipakkam)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "Enrolling my daughter at ON OFF DANCE STUDIO was the best decision. Master Gopinath.R makes Western dance so engaging, and Diya gained massive stage confidence within just 3 months!"
    },
    {
      name: "Soundarya S.",
      role: "Classical Bharatanatyam Disciple (Adult Batch)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "Guru Smt. Aishwarya Raja's dedication to classical perfection and Tala precision is unmatched in Madipakkam. Her focus on Mudras and Abhinaya helped me resume Bharatanatyam with immense pride."
    },
    {
      name: "Meenakshi Sundaram",
      role: "Senior Zumba Member (Age 48, Velachery)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "The morning Zumba sessions have done wonders for my joint mobility and stamina! The playlist is energetic and the atmosphere is so welcoming."
    },
    {
      name: "Aakash & Varun",
      role: "Western Crew Dancers (Adult Batch)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "The vibes at ODS are world-class. Choreographer Gopinath.R's speed, freestyle technique, and the studio's wooden flooring rival top dance academies across India."
    }
  ],

  gallery: [
    { 
      title: "Guru-Shishya Classical Portrait", 
      category: "Classical", 
      img: galleryGuruPortrait,
      caption: "Natya Ilamani Guru Smt. Aishwarya Raja preparing her young disciple for temple recital."
    },
    { 
      title: "Natyarambham & Classical Posture", 
      category: "Classical", 
      img: galleryGuruPosture,
      caption: "Guru Smt. Aishwarya Raja perfecting disciple's posture and sacred mudras."
    },
    { 
      title: "Sacred Salangai Anointment Ceremony", 
      category: "Classical", 
      img: galleryGuruSalangai,
      caption: "The auspicious ritual of tying ghungroo ankle bells onto disciple's feet."
    },
    { 
      title: "Classical Mudra & Hastabhinaya Drills", 
      category: "Classical", 
      img: galleryGuruMudra,
      caption: "Precision training in traditional hand mudras and eye coordination."
    },
    { 
      title: "AFDA Fest Mega Dance Competition", 
      category: "Performances", 
      img: galleryStageAfda,
      caption: "Live stage performance at AFDA Fest Mega Dance Competition & Collab Show."
    },
    { 
      title: "Theatrical Folk & Sword Stage Drama", 
      category: "Performances", 
      img: galleryStageTheatre,
      caption: "Dynamic live mythological & folk character performance with ceremonial props."
    },
    { 
      title: "Expressive Solo Classical Recital", 
      category: "Performances", 
      img: galleryStageSolo,
      caption: "Blindfolded expressive solo performance demonstrating extraordinary balance and abhinaya."
    },
  ],

  faqs: [
    {
      q: "How does batch admission and studio assessment work?",
      a: "Admissions are structured via direct master consultation and studio assessment. Choreographer Gopinath.R and Natya Ilamani Guru Smt. Aishwarya Raja evaluate rhythm and skill level to place students in the ideal batch (Junior, Adult, or Senior). Batch sizes are strictly capped to maintain elite training quality."
    },
    {
      q: "Where is ON OFF DANCE STUDIO located in Madipakkam?",
      a: "We are situated at 2/52, Raghava Nagar 9th Street, Madipakkam, Chennai - 91. Easily accessible from Madipakkam bus terminus, Keelkattalai, Velachery, and Kovilambakkam."
    },
    {
      q: "Do you have batches for adults with zero prior dance experience?",
      a: "Yes! Most of our adult and senior students begin as beginners. Our masters break down footwork and rhythm step-by-step in an uplifting, zero-judgment atmosphere."
    },
    {
      q: "What should I wear for my first session?",
      a: "For Western and Zumba, wear comfortable athletic wear / track pants and clean sneakers. For Classical Bharatanatyam, cotton salwar kameez or dance practice sarees are recommended."
    }
  ]
};
