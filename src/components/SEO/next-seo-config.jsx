const title = 'Ryan';
const description = 'Frontend Developer'

export const SEO = {
    title,
    description,
    canonical: 'https://ryanvs.com.br',
    openGraph: {
        type: 'website',
        locate: 'pt-BR',
        url: 'https://ryanvs.com.br',
        title,
        description,
        images: [
            {
                url: 'https://ryanvs.com.br/og.png',
                alt: title,
                width: 1280,
                height: 720,
            },
        ],
    },
};