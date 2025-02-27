import React from "react";
import Head from "next/head";

import { getMenu, getGDPRBanner } from "../lib/api";

import Layout from "../components/layouts/globalTemplate";
import Footer from "../components/navigation/footer";

import SideBar from "../components/navigation/sideBar";
import ArrowLinkContainer from "../components/navigation/arrowLinkContainer";
import ArrowLink from "../components/navigation/arrowLink";

import GDPRBanner from "../components/utilities/gdpr";
import SocialCallouts from "../components/utilities/socialCallout";
import Spacer from "../components/utilities/spacer";

import SummaryTiles from "../components/summaryTiles";

import NewsContainer from "../components/layouts/newsContainer";
import InlineCalloutContainer from "../components/layouts/inlineCalloutContainer";
import TileContainer from "../components/layouts/tileContainer";
import RefCard from "../components/blocks/refCard";

import { H1, H2 } from "../components/blocks/headers";
import NewsEntry from "../components/blocks/newsEntry";
import Button from "../components/blocks/button";
import InlineCallout from "../components/blocks/inlineCallout";
import NoteSplit from "../components/blocks/noteSplit";

import { attributes } from "../content/index.md";

import styles from "../components/layouts/container.module.css";

export default function Home({ window, menu, gdpr_data }) {
  let { description } = attributes;

  return (
    <Layout window={window}>
      <Head>
        <title>Streamlit documentation</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon32.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="canonical"
          href={`https://${process.env.NEXT_PUBLIC_HOSTNAME}`}
        />
        <meta content="Streamlit Docs" property="og:title" />
        <meta content="Streamlit Docs" name="twitter:title" />
        {description && (
          <React.Fragment>
            <meta content={description} name="description" />
            <meta content={description} property="og:description" />
            <meta content={description} name="twitter:description" />
          </React.Fragment>
        )}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.streamlit.io/" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/sharing-image-facebook.jpg`}
        />
        <meta
          name="twitter:image"
          content={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/sharing-image-twitter.jpg`}
        />
      </Head>
      <GDPRBanner {...gdpr_data} />
      <section className={styles.Container}>
        <SideBar menu={menu} slug={[]} />
        <section className={styles.InnerContainer}>
          <article>
            <H1>Streamlit documentation</H1>
            <p>
              <a href="https://www.streamlit.io">Streamlit</a> is an open-source
              Python library that makes it easy to create and share beautiful,
              custom web apps for machine learning and data science. In just a
              few minutes you can build and deploy powerful data apps. So let's
              get started!
            </p>

            <Spacer size="2rem" />

            <SummaryTiles />

            {/* <H2 className='no-b-m'>What's new</H2>

            <TileContainer>
              <Tile size="half" background="unset" color="unset" dark={{ background: "unset", color: 'white', border_color: 'gray-90' }} border_color="gray-40" img="/logo.svg" title="Feature title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend a facilisis sagittis, vitae nibh massa in facilisis et. Pretium eget non cursus purus tempus porta sodales." link="/tutorials/get-started" />
              <Tile size="half" background="unset" color="unset" dark={{ background: "unset", color: 'white', border_color: 'gray-90' }} border_color="gray-40" icon="visibility" title="Feature title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend a facilisis sagittis, vitae nibh massa in facilisis et. Pretium eget non cursus purus tempus porta sodales." link="/tutorials/get-started" />
              <Tile size="half" background="unset" color="unset" dark={{ background: "unset", color: 'white', border_color: 'gray-90' }} border_color="gray-40" icon="edit" title="Feature title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend a facilisis sagittis, vitae nibh massa in facilisis et. Pretium eget non cursus purus tempus porta sodales." link="/tutorials/get-started" />
              <Tile size="half" background="unset" color="unset" dark={{ background: "unset", color: 'white', border_color: 'gray-90' }} border_color="gray-40" img="/logo.svg" title="Feature title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend a facilisis sagittis, vitae nibh massa in facilisis et. Pretium eget non cursus purus tempus porta sodales." link="/tutorials/get-started" />
            </TileContainer> */}

            {/* <NewsContainer>
              <NewsEntry
                date="2022-02-20T16:30:00.000Z"
                title="Announcement: Streamlit Community Cloud Maintenance"
                text="Streamlit Community Cloud will have a maintenance event on Sunday, February 20th at 7:00 am PST. The maintenance event will last for no more than 5 minutes."
                link="https://discuss.streamlit.io/c/official-announcements/"
              />
              <NewsEntry date="2022-02-17T16:08:45.000Z" title="Calculating distances in cosmology with Streamlit" text="Learn how three friends made the cosmology on-the-go app CosmΩracle." link="https://blog.streamlit.io/calculating-distances-in-cosmology-with-streamlit/" />
              <NewsEntry date="2021-02-07T16:30:00.000Z" title="Monthly Rewind > January 2022" text="Your January look-back at new features and great community content." link="https://blog.streamlit.io/monthly-rewind-january-2022/" />
              <Button link="https://blog.streamlit.io/">View all updates</Button>
            </NewsContainer> */}

            <H2>How to use our docs</H2>
            <InlineCalloutContainer>
              <InlineCallout
                color="violet-70"
                icon="description"
                bold="Streamlit library"
                href="/library/get-started"
              >
                includes our Get started guide, API reference, and more advanced
                features of the core library including caching, theming, and
                Streamlit Components.
              </InlineCallout>
              <InlineCallout
                color="l-blue-70"
                icon="cloud"
                bold="Streamlit Community Cloud"
                href="/streamlit-community-cloud"
              >
                is an open and free platform for the community to deploy,
                discover, and share Streamlit apps and code with each other.
                Create a new app, share it with the community, get feedback,
                iterate quickly with live code updates, and have an impact!
              </InlineCallout>
              <InlineCallout
                color="orange-70"
                icon="school"
                bold="Knowledge base"
                href="/knowledge-base"
              >
                is a self-serve library of tips, step-by-step tutorials, and
                articles that answer your questions about creating and deploying
                Streamlit apps.
              </InlineCallout>
              {/* <InlineCallout color="green-70" icon="code" bold="Cookbook" href="/cookbook">
                provides short code snippets that you can copy in for specific use cases.
              </InlineCallout>
              <InlineCallout color="red-70" icon="question_answer" bold="Support" href="/support">
                are the bread and butter of how our APIs and configuration files work and will give you short, actionable explanations of specific functions and features.
              </InlineCallout> */}
            </InlineCalloutContainer>

            <H2 className="no-b-m">What's new</H2>

            <TileContainer>
              <RefCard
                size="third"
                href="/library/advanced-features/dataframes"
              >
                <i className="material-icons-sharp">edit_note</i>
                <h4>Editable DataFrames!</h4>
                <p>
                  Display a data editor widget with{" "}
                  <code>st.experimental_data_editor</code>
                  to edit DataFrames and many other data structures in a
                  table-like UI.
                </p>
              </RefCard>
              <RefCard size="third" href="/library/advanced-features/caching">
                <i className="material-icons-sharp">cached</i>
                <h4>New caching commands</h4>
                <p>
                  <code>st.cache_data</code> and <code>st.cache_resource</code>{" "}
                  are here to replace st.cache and make caching less complex and
                  more performant
                </p>
              </RefCard>
              <RefCard
                size="third"
                href="/library/api-reference/layout/st.columns"
              >
                <i className="material-icons-sharp">view_column</i>
                <h4>Columns in columns</h4>
                <p>
                  <code>st.columns</code> supports up to one level of column
                  nesting (i.e. columns inside columns) in the main area of the
                  app.
                </p>
              </RefCard>
              <RefCard
                size="third"
                href="/library/api-reference/status/st.progress"
              >
                <i className="material-icons-sharp">hourglass_top</i>
                <h4>Progress bar message</h4>
                <p>
                  <code>st.progress</code> supports adding a message to display
                  above the progress bar with the <code>text</code> keyword
                  parameter
                </p>
              </RefCard>
              <RefCard
                size="third"
                href="https://markdown-labels.streamlit.app/"
              >
                <i className="material-icons-sharp">terminal</i>
                <h4>Python 3.11 support</h4>
                <p>
                  Starting in Streamlit 1.18.0, Streamlit formally supports
                  Python 3.11. 🐍
                </p>
              </RefCard>
              <RefCard
                size="third"
                href="/library/api-reference/text/st.markdown"
              >
                <i className="material-icons-sharp">brush</i>
                <h4>Colored text support in Markdown</h4>
                <p>
                  Streamlit now supports colored text in all commands that
                  accept Markdown, including <code>st.markdown</code>,{" "}
                  <code>st.header</code>, and more! Click to read the
                  documentation.
                </p>
              </RefCard>
              {/* <Tile
                size="half"
                background="unset"
                color="unset"
                dark={{
                  background: "unset",
                  color: "white",
                  border_color: "gray-90",
                }}
                border_color="gray-40"
                img="/logo.svg"
                title="Clear memo + singleton caches procedurally"
                text="Do you need more control over cache invalidation? Any function annotated with @st.cache_data or @st.cache_resource gets its own clear() function automatically."
                link="/library/advanced-features/experimental-cache-primitives#clear-memo-and-singleton-caches-procedurally"
              /> */}
            </TileContainer>

            <H2 className="no-b-m">Latest blog posts</H2>

            <NewsContainer>
              <NewsEntry
                date="2023-02-09T16:05:00.000Z"
                title="Introducing 2 new caching commands to replace st.cache!"
                text="st.cache_data and st.cache_resource are here to make caching less complex and more performant"
                link="https://blog.streamlit.io/introducing-two-new-caching-commands-to-replace-st-cache/"
                image="/blog-1.svg"
                target="_blank"
              />
              <NewsEntry
                date="2023-02-09T16:05:00.000Z"
                title="Using ChatGPT to build a Kedro ML pipeline"
                text="Talk with ChatGPT to build feature-rich solutions with a Streamlit frontend"
                link="https://blog.streamlit.io/using-chatgpt-to-build-a-kedro-ml-pipeline/"
                image="/blog-2.svg"
                target="_blank"
              />
              <NewsEntry
                date="2023-02-07T16:05:00.000Z"
                title="Streamlit-Authenticator, Part 2: Adding advanced features to your authentication component"
                text="How to add advanced functionality to your Streamlit app's authentication component"
                link="https://blog.streamlit.io/streamlit-authenticator-part-2-adding-advanced-features-to-your-authentication-component/"
                image="/blog-3.svg"
                target="_blank"
              />
              <Button link="https://blog.streamlit.io/" target="_blank">
                View all updates
              </Button>
            </NewsContainer>

            <NoteSplit
              background="gray-20"
              title="Join the community"
              copy="Streamlit is more than just a way to make data apps, it's also a community of creators that share their apps and ideas and help each other make their work better. Please come join us on the community forum. We love to hear your questions, ideas, and help you work through your bugs — stop by today!"
              button={{
                text: "View forum",
                link: "https://discuss.streamlit.io",
                target: "_blank",
              }}
              image="/join.png"
            />
          </article>

          <SocialCallouts />

          <ArrowLinkContainer>
            <ArrowLink
              link="/library/get-started"
              type="next"
              content="Get started"
            />
          </ArrowLinkContainer>
        </section>
        <Footer />
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const props = {};
  props["menu"] = getMenu();
  props["gdpr_data"] = await getGDPRBanner();

  return {
    props: props,
    revalidate: 60,
  };
}
