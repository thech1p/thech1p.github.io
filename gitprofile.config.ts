// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'thech1p', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['sixtensch/Whisperwoods'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
		{
			title: 'Tinkertails',
			description:
			  'A multiplayer co-op game and custom game engine developed from scratch over 14 weeks as part of a university group project. Contributed to core systems, including animation, transform handling, model importing, physically based rendering (PBR) with image-based lighting, and cubemap filtering. Played a key role in organizing the asset pipeline and created the majority of the 3D assets.',
			imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/TTIcon.png",
			link: '',
			images: [
				{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/TTPoster.jpg" },
				{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/TTBuildmode.jpg" },
				{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/TTDevmode.png" },
			]
		  },
        {
          title: 'Whisperwoods',
          description:
            'Game and custom engine built over the course of six weeks as part of a university group project. Contributed to essential systems such as skeletal animation, cinematic cutscenes, asset processing, and various shaders and graphics. Additionally, created many of the art assets, including the main character model, textures, and animations.',
          imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/ww.png",
          
		  images: [
			{ imageUrl: "https://github.com/thech1p/thech1p.github.io/blob/main/PortfolioImages/whisperwoods-poster.png?raw=true" }
		  ],
		  videos: [
			{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/WWVideoThumbnail.jpg" , videoUrl: "https://youtu.be/jSfU6uw6qy8" }
		  ]
			
        },
        {
          title: 'Captain Catnip',
          description:
            'Another game jam game developed with over the course of a weekend as part of the same duo as Push Hour. I was similarely mainly responsible for creating and integrating assets using blender and substance painter. This was followed by helping out with various code and creating a water shader using the unity shader nodes.',
          imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/Banner1.png",
          link: 'https://kongstronk.itch.io/captain-catnip',
		  images: [
			{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/CCCaptain.jpg" },
			{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/CCGameplay1.png" },
			]
        },
        {
          title: 'Push Hour',
          description:
            'A game developed with a friend and fellow student over the course of a weekend for a game jam event. I was mainly responsible for asset creation and integration, using blender and substance painter. Furthermore I helped with various programming tasks including a system for crowd appearance variation, and crowd sound ambiance.',
          imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PushHourBanner.png",
          link: 'https://kongstronk.itch.io/push-hour',
		  images: [
			{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/PHMenu.png" },
			{ imageUrl: "https://raw.githubusercontent.com/thech1p/thech1p.github.io/refs/heads/main/PortfolioImages/PHGameplay1.png" },
			]
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Christoffer Eriksson',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ceriksson94',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'thech1p.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1bH8U-Ti_-c6zGnKtvFe9dKv6VIAWOmPO/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C#',
    'Unity',
	'DirectX',
    'HLSL',
	'CUDA',
    'Blender',
    'Substance Painter',
    'Python',
    'JavaScript',
	'TypeScript',
    'MySQL',
    'Git',
  ],
//   experiences: [
//     {
//       company: 'Norwegian',
//       position: 'First Officer - Boeing 737NG',
//       from: 'March 2017',
//       to: 'April 2020',
//       companyLink: 'https://www.norwegian.com/',
//     },
//   ],
//   certifications: [
//     {
//       name: 'International Baccalaureate',
//       body: 'Diploma',
//       year: 'Jan 2013',
//       link: 'https://www.ibo.org/',
//     },
//   ],
//   educations: [
//     {
//       institution: 'Blekinge Institute of Technology',
//       degree: 'Master of Science in Engineering (MSE), Game and Software Engineering',
//       from: '2020',
//       to: '2025',
//     },
//     {
//       institution: 'Lund University School of Aviation',
//       degree: 'Commercial Pilot with MPL Certificate',
//       from: '2015',
//       to: '2017',
//     },
//   ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
