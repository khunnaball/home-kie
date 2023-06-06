const CONFIG = {
    // General
    name: 'kie',
    openInNewTab: false,
    title: 'kie-home',

    // Clock
    twelveHourFormat: false,

    // Search
    searchEngine: 'google', // google, ddg
    barPlaceholder: 'search..',
    autoFocusBar: true,

    // Bookmarks
    firstBookmarksList: [
        {
            id: '1',
            name: 'youtube',
            link: 'https://youtube.com/',
        },
        {
            id: '2',
            name: 'twitter',
            link: 'https://twitter.com/',
        },
        {
            id: '3',
            name: 'twitch',
            link: 'https://www.twitch.tv/',
        },
        {
            id: '4',
            name: 'gmail',
            link: 'https://mail.google.com/',
        },
    ],
    secondBookmarksList: [
        {
            id: '1',
            name: 'github',
            link: 'https://github.com/',
        },
        {
            id: '2',
            name: 'reddit',
            link: 'https://www.reddit.com/',
        },
        {
            id: '3',
            name: 'hackernews',
            link: 'https://hckrnews.com/',
        },
        {
            id: '4',
            name: 'spotify',
            link: 'https://spotify.com/',
        },
        {
            id: '5',
            name: 'discord',
            link: 'https://discord.com/',
        },
    ]
}

export const config = CONFIG;