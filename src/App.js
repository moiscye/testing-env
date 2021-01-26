import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
import React from "react";
import axios from "axios";
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
export default function App() {
  const testEnv = async () => {
    let res = await axios.get(`.netlify/functions/envir`);
    console.log(res);
  };
  return (
    <ContentWithPaddingXl>
      <SubmitButton onClick={testEnv}>TESTENV!</SubmitButton>
    </ContentWithPaddingXl>
  );
}
