import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Intro from "../components/Intro";
import IconBlock from "../components/IconBlock";
import About from "../components/About";
import Projects from "../components/Projects";

let pageTitle = "Joosep Arrak - Front-end Developer";
let description = "Personal Portfolio of Joosep Arrak - Front-end Developer";
let currentURL = "https://www.arrak.dev";
let siteName = "Front-end Developer Joosep Arrak";
let previewImage = "https://www.arrak.dev/img/socialcardlarge.png";
let twitterHandle = "@arrakdev";

const graphcms = new GraphQLClient(process.env.GRAPH_CMS_MASTER);

export default function Home({ projects, employments, skills }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <div className="w-full h-full max-w-7xl mx-auto overflow-x-hidden">
          <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:image" content={previewImage} key="ogimage" />
            <meta property="og:site_name" content={siteName} key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta
              property="og:description"
              content={description}
              key="ogdesc"
            />

            {/* Twitter */}
            <meta
              name="twitter:card"
              content="summary_large_image"
              key="twcard"
            />
            <meta
              name="twitter:creator"
              content={twitterHandle}
              key="twhandle"
            />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={previewImage} />
          </Head>

          <Intro />
          <About />
          <IconBlock />
          <Projects data={projects} />

          {/* <Header />
          <HomeScreen />
          <About />
          <Skills />
          <Projects projectData={projects} />
          <Experience employmentData={employments} />
          <Contact /> */}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const QUERY = gql`
    {
      projects(orderBy: createdAt_ASC) {
        id
        projectType
        name
        url
        sourceUrl
        description
        image {
          url
        }
      }
      employments(orderBy: createdAt_DESC) {
        id
        position
        company
        start
        end
      }
      skills(orderBy: id_DESC) {
        id
        skill
      }
    }
  `;

  const { projects, employments, skills } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
      employments,
      skills,
    },
  };
}
