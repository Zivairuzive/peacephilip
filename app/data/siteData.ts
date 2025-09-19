// Central data file for all site content
// This file contains all hardcoded values from across the application

// SEO and Metadata
export const companyName = "PeacePhilip";
export const telephone = "+27 63 083 7986";
export const companySlogan = "Build with precision, style, and realibility."

export const company_logo = "/peace_transparent.png";
export const seoData = {
    metadata: {
        title: "PeacePhilip Construction",
        description:
            "PeacePhilip is a construction company committed to excellence and innovation. We provide tailing, ceiling installation, plumbing, electrical works, and Gamazini wall finishes.",
    },
    openGraph: {
        title: "PeacePhilip",
        description: "Construction Company",
        image: "https://www.peacephilipconstruction.com/favicon.ico",
        url: "https://www.peacephilipconstruction.com",
    },
    keywords:
        "Tailing, Ceiling Installation, Plumbing, Electrical Works, Gamazini Walls, Mafikeng, NorthWest, South Africa",
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PeacePhilip",
        url: "https://www.peacephilipconstruction.com",
        logo: "https://www.peacephilipconstruction.com/favicon.ico",
        description:
            "PeacePhilip is a construction company committed to excellence and innovation.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "27 Golf View Akasia",
            addressLocality: "Mafikeng, North West",
            addressCountry: "South Africa",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+27 63 083 7986",
            contactType: "customer service",
            email: "peacephilipppconstruction@gmail.com",
        },
    },
};

export const socialLinks = [
    {
        href: 'https://www.facebook.com/share/BGRpkiB8ZuUvRReR/?mibextid=LQQJ4d',
        src: '/facebook.svg',
        alt: 'facebook_page',
    },
    {
        href: '', // LinkedIn link missing, add if available
        src: '/linkedin.svg',
        alt: 'linkedin_page',
    },
    {
        href: 'https://www.instagram.com/p/C9FltsRNR1y/?hl=en',
        src: '/instagram.svg',
        alt: 'instagram_page',
    },
];


// Company Information
export const companyInfo = {
    name: "PeacePhilip Construction",
    address: {
        line: 27,
        street: "Golf View Akasia",
        city: "Mafikeng",
        country: "South Africa",
    },
    contact: {
        phone: "+27 63 083 7986",
        additionalPhone: "+27 74 430 5507",
        email: "peacephilipppconstruction@gmail.com",
    },
};
export const contactInfo = [
    {
        label: 'Address',
        value: JSON.stringify(companyInfo.address),
    },
    {
        label: 'Phone',
        value: companyInfo.contact.email,
    },
    {
        label: 'Email',
        value: companyInfo.contact.email,
    },
];
export const HomePageBannerHeader = "Building Tomorrow, Communities Today";

// Home Page Data
export const homePageData = {
    banner: {
        hero: {
            url: "bg-[url('/landing01.webp')]",
            text: HomePageBannerHeader,
        },
        cta: {
            url: "bg-[url('/works.webp')]",
            text: "Have a project you are looking forward to?",
            subtext: "Contact us to see how we can help",
            height: "h-96",
            btn: "/contact",
            font: "font-extralight",
        },
    },
    aboutMinor: {
        header: "Company Overview",
        text: "PeacePhilip is a construction company committed to excellence and innovation. Our team of experts focus on modern and creative solutions for unique construction projects.",
        btn: "More About Us",
        image: "/home-about.avif",
    },
    subhead:
        "We are committed to continuously integrating cutting-edge technologies and methodologies into projects",
    strategy: {
        header: "Strategy",
        text: "Hydravex's strategy forms the foundation for how we operate and build value for the communities in which we operate.",
        lists: [
            "We are committed to operating our assets safely and sustainably in partnership with our communities.",
            "We strive to create an environment where client satisfaction is the ultimate goal of our company.",
            "We intend to operate in multiple locations to become a notable player in our industry",
            "We think and build like owners",
        ],
        image: "/home-about.avif",
        order: "order-first",
        background: "bg-gray-200",
    },
    cardDetails: [
        {
            image: "./expertise.svg",
            header: "Local Expertise",
            subHead:
                "Our familiarity with local building codes, regulations, and permits allows streamlined project approval and ensure compliance.",
        },
        {
            image: "./durability.svg",
            header: "Quality and Reliability",
            subHead:
                "A history of successful projects and satisfied clients builds trust and confidence. We are commited to using durable materials and skilled labor to ensure long-lasting results.",
        },
        {
            image: "./businessman.svg",
            header: "Professionalism",
            subHead:
                "We understand maintaining open and transparent communication throughout the project builds trust and reduces misunderstandings. We are a client centred company.",
        },
        {
            image: "./shield.svg",
            header: "Safety and Compliance",
            subHead:
                "We adherence to strict safety standards protects workers and clients, minimizing the risk of accidents while ensuring all projects meet regulatory standards avoids legal issues and project delays.",
        },
    ],
    fullSection: {
        url: "bg-[url('/final.avif')]",
        head1: "We Are Always Implementing",
        head2: "Innovative Solutions",
    },
};

// Contact Page Data
export const contactPageData = {
    banner: {
        url: "bg-[url('/construct.avif')]",
        text: "We would like to here from you ",
    },
    contactInfo: [
        {
            icon: "MapPinIcon",
            title: "Office Address",
            content: [
                companyInfo.address.line,
                companyInfo.address.street,
                companyInfo.address.city,
                companyInfo.address.country,
            ],
        },
        {
            icon: "PhoneIcon",
            title: "Phone",
            content: [companyInfo.contact.additionalPhone],
        },
        {
            icon: "EnvelopeIcon",
            title: "Email",
            content: [companyInfo.contact.email],
        },
    ],
};

// Services Page Data
export const servicesPageData = {
    banner: {
        text: "Our Services Overview",
        url: "bg-[url('/services.webp')]",
        subtext:
            "We offer a wide array of services to meet our customers' requirements",
    },
    serviceSections: [
        {
            header: "Tailing",
            text: "We develop unique vision for the project, considering the purpose, aesthetics, and functionality by understanding and integrating the client's needs, budget, and preferences into the design!",
            image: "/service-architectural.avif",
            background: "bg-white",
            order: "order-last",
        },
        {
            header: "Plumbing",
            text: "We cover residential, commecial and industrial projects. We renovate systems and structures bringing back to original condition or upgrading to more modern conditions",
            image: "/service-renovation.avif",
            background: "bg-gray-300",
            order: "order-first",
        },
        {
            header: "Gamazin Walls",
            text: "From bridges to sky scrappers, we engineer solutions that stand the test of time!",
            image: "/service-structural.png",
            background: "bg-white",
            order: "order-last",
        },
        {
            header: "Electrical Works",
            text: "We construct inspiring moderm spaces that endures for you",
            image: "/service-building.png",
            background: "bg-gray-300",
            order: "order-first",
        },
        {
            header: "Council and Minucipal Submissions and Permits",
            text: "For all your plans and subdivision permits, we can submit any paperwork for processing on your behalf for processing",
            image: "/service-submission.png",
            background: "bg-white",
            order: "order-last",
        },
    ],
    services: [
        {
            title: "Tailing",
            description:
                "Creativity meets functionality in our innovative designs",
        },
        {
            title: "Ceiling Installation",
            description:
                "We bring visions to life, whether a new build or revalitasation project",
        },
        {
            title: "Gamazin Walls",
            description:
                "From bridges to skyscrappers, we engineer solutions that withstand the test of time",
        },
        {
            title: "Electrical Works",
            description:
                "For all your plans and subdivision permits, we can submit any paperwork for processing on your behalf.",
        },
        {
            title: "Plumbing",
            description:
                "We construct modern space that inspire and endure for you",
        },
        {
            title: "Civil Construction",
            description:
                "Whether it's roads to utilities to infrastructure, we pave the way for progress",
        },
    ],
};

// About Page Data
export const aboutPageData = {
    banner: {
        text: "About Us",
        url: "bg-hero1",
    },
    vision: {
        header: "Vision",
        text: "Being the Market Leader in Facilitating National Development. We aspire to lead the way in shaping Zimbabwe's future but creating sustainable impactful solutionss, and leaving a lasting legacy for the generations to come",
        image: "/hydra_works.jpg",
        background: "bg-gray-200",
    },
    mission: {
        header: "Mission",
        subheading: "Providing Integrated Construction and Solutions.",
        text: "Hydravex Engineering is your one-stop shop for all construction needs. Our intergrated approach ensures seamless project execution from concept to completion. We blend expertise, creativity, and precision to deliver solutions that are built to last.",
        background: "bg-white",
        image: "/mission.jpeg",
        order: "order-first",
    },
    coreValues: [
        {
            title: "Honesty",
            description:
                "Transparent is our foundation. We communicate openly with clients, partners and each other",
        },
        {
            title: "Integrity",
            description:
                "Our actions align with our words. Trust is paramount, and we uphold the highest ethical standards",
        },
        {
            title: "Sustainability",
            description:
                "We strive to build responsibly considering environmental impact and long-term viabilty",
        },
        {
            title: "Workmanship",
            description:
                "Craptsmanship defines us. Every detail matter and we ensure that high-quality standards are met",
        },
    ],
    coreValueImages: [
        { src: "/C.svg", alt: "C" },
        { src: "/H.svg", alt: "H" },
        { src: "/I.svg", alt: "I" },
        { src: "/S.svg", alt: "S" },
    ],
};

// Gallery Page Data
export const galleryPageData = {
    banner: {
        text: "Gallery",
        url: "bg-[url('/policy.svg')]",
    },
};

// Privacy Page Data
export const privacyPageData = {
    banner: {
        text: "Policy",
        url: "bg-[url('/policy.svg')]",
    },
};

export const faqData = [
    {
    question: "Can I see your previous work?",
    answer: "Yes, We are happy to share our portfolio and client references so you can asses the quality of our projects "
    },
    {
        question: "Do wall and floor tiling cost the same?",
        answer: "Pricing differs between wall and floors, as it depends on the surface, preparation and type of tiles required"
        },
    {
        question: "What ceiling types do you offer?",
        answer: "We install a variety of ceilings, including PVC, suspended, and gypsum board ceilings, depending on style and budget."
    },
    {
        question: "Do you handle both new installations and repairs?",
        answer: "Yes, our services cover new projects , upgrades and emergency repairs."
    },
    {
        question: "Can Gamazini be applied indoors and outdoors?",
        answer: "Yes, Gamazini finishes work well for both interior and exterior wall."
    }
    ];