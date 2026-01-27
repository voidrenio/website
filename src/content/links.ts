const env = import.meta.env;

export const linkGroups = [
  {
    label: 'Social',
    icon: 'ri-chat-quote-fill',
    links: [
      {
        label: 'Mastodon',
        url: env.LINK_MASTODON,
        icon: 'ri-mastodon-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Bluesky',
        url: env.LINK_BLUESKY,
        icon: 'ri-bluesky-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'X/Twitter',
        url: env.LINK_TWITTER,
        icon: 'ri-twitter-x-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Threads',
        url: env.LINK_THREADS,
        icon: 'ri-threads-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Reddit',
        url: env.LINK_REDDIT,
        icon: 'ri-reddit-fill',
        external: true,
        enabled: false,
      },
    ],
  },
  {
    label: 'Media',
    icon: 'ri-movie-2-fill',
    links: [
      {
        label: 'YouTube',
        url: env.LINK_YOUTUBE,
        icon: 'ri-youtube-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'TikTok',
        url: env.LINK_TIKTOK,
        icon: 'ri-tiktok-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Twitch',
        url: env.LINK_TWITCH,
        icon: 'ri-twitch-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Odysee',
        url: env.LINK_ODYSEE,
        icon: 'ri-video-fill',
        external: true,
        enabled: false,
      },
    ],
  },
  {
    label: 'Works',
    icon: 'ri-artboard-fill',
    links: [
      {
        label: 'Itch.io',
        url: env.LINK_ITCHIO,
        icon: 'ri-gamepad-fill',
        external: true,
        enabled: true,
      },
      {
        label: 'Gumroad',
        url: env.LINK_GUMROAD,
        icon: 'ri-store-fill',
        external: true,
        enabled: false,
      },
    ],
  },
  {
    label: 'Development',
    icon: 'ri-code-box-fill',
    links: [
      {
        label: 'Codeberg',
        url: env.LINK_CODEBERG,
        icon: 'ri-git-repository-fill',
        external: true,
        enabled: true,
      },
      ,
      {
        label: "Voidren's Git",
        url: env.LINK_VOIDREN_GIT,
        icon: 'ri-git-repository-line',
        external: true,
        enabled: true,
      },
      {
        label: 'Github',
        url: env.LINK_GITHUB,
        icon: 'ri-github-fill',
        external: true,
        enabled: true,
      },
    ],
  },
  {
    label: 'Community',
    icon: 'ri-user-community-fill',
    links: [
      {
        label: 'Discord Server',
        url: env.LINK_DISCORD,
        icon: 'ri-discord-fill',
        external: true,
        enabled: false,
      },
    ],
  },
  {
    label: 'Support',
    icon: 'ri-hand-heart-fill',
    links: [
      {
        label: 'Patreon',
        url: env.LINK_PATREON,
        icon: 'ri-patreon-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Ko-fi',
        url: env.LINK_KOFI,
        icon: 'ri-heart-3-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Buy Me a Coffee',
        url: env.LINK_BUYMEACOFFEE,
        icon: 'ri-cup-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'Liberapay',
        url: env.LINK_LIBERAPAY,
        icon: 'ri-money-dollar-box-fill',
        external: true,
        enabled: false,
      },
      {
        label: 'PayPal',
        url: env.LINK_PAYPAL,
        icon: 'ri-paypal-fill',
        external: true,
        enabled: false,
      },
    ],
  },
];
