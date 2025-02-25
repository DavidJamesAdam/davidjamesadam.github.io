import Head from "next/head";
import Script from "next/script";

export const head = () => (
  <Head>
    <Script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            var script = document.createElement('script');
            script.src = 'https://kmgu6d1qxk.execute-api.us-east-2.amazonaws.com/test/api/tlv1?siteId=93a7a8b1-0c21-47be-9ee0-17dc2fb238bc';
            script.async = true;
            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);
          })();
        `,
      }}
    />
  </Head>
)