import Head from "next/head";
import reset from "../../css/reset";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import Header from "../header";

import "nprogress";

export default ({ children, headerActive }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Utkarsh Gupta's blog</title>
      </Head>

      <style jsx global>
        {reset} //reset browser default styles, i will apply my own
      </style>
      <style jsx global>
        {colors} //// TODO: What does this do?
      </style>
      <style jsx global>
        {nprogress} //thin progress bar
      </style>
      <style jsx global>
        {typography} //// TODO: What does this do? 
      </style>

      <Header active={headerActive} />

      {children}

      <style jsx>{`
        main {
          padding: 10px;
        }
        @media (max-width: 600px) {
          padding: 20px;
        }
      `}</style>
    </main>
  );
};
