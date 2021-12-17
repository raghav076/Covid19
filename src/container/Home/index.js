import React from "react";
import DataDisplay from "../../components/DataDisplay";
import { Footer } from "../../components/Footer";
import Layout from "../../components/Layout";
import Search from "../../components/Search";

function Home() {
  return (
    <>
      <Layout />
      <div>
        <ul style={{color: 'white'}}>
          <li><a href="https://www.amazon.in/Ensure-Complete-Balanced-Nutrition-Adults/dp/B00IFWE1XW?keywords=ensure+400+gram&qid=1639667137&s=hpc&sr=1-4&linkCode=ll1&tag=raghavmukat07-21&linkId=34ef4f129788495ec1192236ecb1bbc7&language=en_IN&ref_=as_li_ss_tl" target="_blank">Ensure</a></li>
          <li><a href="https://www.amazon.in/Huggies-Medium-Size-Diapers-Counts/dp/B01EAFLTFK?crid=16JEAUDKHQQ73&keywords=huggies+diaper+m+size&qid=1639667376&sprefix=huggies+diaper+m%2Caps%2C529&sr=8-4-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFOVzA4TFJFWVlTTEsmZW5jcnlwdGVkSWQ9QTAxMDg5MDQzOE5OTlFFUEQ1SEdIJmVuY3J5cHRlZEFkSWQ9QTA3MTU5NTdLUTVYU1VRMDJJQkMmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=ll1&tag=raghavmukat07-21&linkId=68458ae57d3f82cc6354b4cbb466b07e&language=en_IN&ref_=as_li_ss_tl" target="_blank">Diapers</a></li>
          <li><a href="https://www.amazon.in/LuvLap-Paraben-Free-Wipes-Fliptop/dp/B08395732F?keywords=baby+wipes&qid=1639667344&sr=8-11&linkCode=ll1&tag=raghavmukat07-21&linkId=5e1e97ab1532374a417f652fc6f6cb52&language=en_IN&ref_=as_li_ss_tl" target="_blank">Wipes</a></li>
          <li><a href="https://amzn.to/3pZ5WLD" target="_blank">Body Lotion and Cream</a></li>
          <li><a href="https://amzn.to/3q0dEFm" target="_blank">Body Wash</a></li>
          <li><a href="https://amzn.to/3oZLScN" target="_blank">Saree Bag</a></li>
        </ul>
      </div>
      <Search />
      <DataDisplay />
      <Footer />
    </>
  );
}

export default Home;
