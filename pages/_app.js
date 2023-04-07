import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const getPathSlugs = () => {
  // We fetched locales from our API once at build time
  return ["de", "en", "fr", "ru"].map((locale) => ({
    params: {
      locale,
    },
  }));
}
  

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params
    }
  };
}