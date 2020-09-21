import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import SimpleList from '../components/SimpleList';
import SimpleListProvider from '../components/simpleList/context/SimpleListProvider';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Simple List</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A simple list with React, Typescript and NEXTjs.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Items</h2>
        <SimpleListProvider>
          <SimpleList />
        </SimpleListProvider>
      </section>
    </Layout>
  );
}
