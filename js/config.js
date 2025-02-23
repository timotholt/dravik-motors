// Configuration for brand and car models
const CONFIG = {
    brand: {
        name: 'Dravik Motors',
        tagline: 'Luxury Redefined',
        year: new Date().getFullYear(),
        social: {
            instagram: '#',
            twitter: '#',
            facebook: '#'
        }
    },
    theme: {
        colors: {
            primary: '#0a0a0a',           // Darker black
            accent: '#d4af37',            // Rich gold
            text: '#ffffff',              // White text
            lightText: '#ffffff',         // Pure white
            background: '#111111',        // Dark background
            secondaryBackground: '#1a1a1a', // Slightly lighter background
            border: '#333333',            // Dark gray borders
            hover: '#ffd700',             // Bright gold for hover
            overlay: 'rgba(0, 0, 0, 0.95)', // Nearly black overlay
            shadow: 'rgba(0, 0, 0, 0.3)',   // Stronger shadows
            muted: '#888888'              // Muted text color
        }
    },
    models: [
        {
            id: 'phantom',
            name: 'Phantom',
            tagline: 'The epitome of luxury',
            description: 'A masterpiece of engineering and design',
            basePrice: 450000,
            colors: [
                { name: 'Celestial Silver', hex: '#C0C0C0' },
                { name: 'Midnight Black', hex: '#000000' },
                { name: 'Arctic White', hex: '#FFFFFF' },
                { name: 'Royal Blue', hex: '#002366' },
                { name: 'Emerald Green', hex: '#004D40' },
                { name: 'Burgundy Red', hex: '#800020' }
            ],
            features: [
                {
                    name: 'Performance',
                    description: '0-60 mph in 3.2 seconds',
                    icon: 'fa-gauge-high'
                },
                {
                    name: 'Range',
                    description: '400 miles per charge',
                    icon: 'fa-road'
                },
                {
                    name: 'Interior',
                    description: 'Hand-crafted luxury materials',
                    icon: 'fa-couch'
                }
            ]
        },
        {
            id: 'spectre',
            name: 'Spectre',
            tagline: 'Performance meets elegance',
            description: 'Where power meets sophistication',
            basePrice: 380000,
            colors: [
                { name: 'Celestial Silver', hex: '#C0C0C0' },
                { name: 'Midnight Black', hex: '#000000' },
                { name: 'Arctic White', hex: '#FFFFFF' },
                { name: 'Royal Blue', hex: '#002366' },
                { name: 'Emerald Green', hex: '#004D40' }
            ],
            features: [
                {
                    name: 'Performance',
                    description: '0-60 mph in 2.8 seconds',
                    icon: 'fa-gauge-high'
                },
                {
                    name: 'Range',
                    description: '350 miles per charge',
                    icon: 'fa-road'
                },
                {
                    name: 'Technology',
                    description: 'Advanced AI assistance',
                    icon: 'fa-microchip'
                }
            ]
        },
        {
            id: 'wraith',
            name: 'Wraith',
            tagline: 'The future of luxury',
            description: 'Redefining the grand touring experience',
            basePrice: 320000,
            colors: [
                { name: 'Celestial Silver', hex: '#C0C0C0' },
                { name: 'Midnight Black', hex: '#000000' },
                { name: 'Arctic White', hex: '#FFFFFF' },
                { name: 'Royal Blue', hex: '#002366' }
            ],
            features: [
                {
                    name: 'Performance',
                    description: '0-60 mph in 3.0 seconds',
                    icon: 'fa-gauge-high'
                },
                {
                    name: 'Range',
                    description: '380 miles per charge',
                    icon: 'fa-road'
                },
                {
                    name: 'Comfort',
                    description: 'Adaptive air suspension',
                    icon: 'fa-cloud'
                }
            ]
        }
    ],
    angles: [
        { id: 'front', name: 'Front View' },
        { id: 'side', name: 'Side Profile' },
        { id: 'rear', name: 'Rear View' },
        { id: 'interior', name: 'Interior' }
    ]
};
