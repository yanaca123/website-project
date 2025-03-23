// import Image from "next/image";
import React from "react";

// import pharma from "../../assets/pharmaceuticals2.jpg";
// import pharma1 from "../../assets/pharmaceuticals3.jpg";
// import { Product, SimplifiedProduct } from "@/types/types";
import StatBox from "@/components/statBox/statBox";
import ProductList from "@/components/productList/productList";

// async function fetchPharmaceuticalsData(): Promise<SimplifiedProduct[]> {
//   try {
//     const token =
//       "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
//     const response = await fetch(
//       `http://localhost:1337/api/pharamaceuticals?populate=*`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         cache: "no-store",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch pharmaceutical products");
//     }

//     const result = await response.json();

//     const formattedProducts: SimplifiedProduct[] = result.data.map(
//       (item: Product) => ({
//         slug: item?.slug || "",
//         title: item?.title || "",
//         description: item?.description || "",
//         thumbnail: {
//           thumbnail:
//             item.thumbnail?.formats?.thumbnail?.url ||
//             item?.thumbnail?.url ||
//             "",
//         },
//       })
//     );

//     return formattedProducts;
//   } catch (error) {
//     console.error("Error fetching pharmaceutical products:", error);
//     return [];
//   }
// }

export default async function PharmaceuticalComponent() {
  const products = [
    {
      name: "Budaren 9 Tablet CR",
      description: "Budaren 9 Tablet CR is a controlled-release medication designed for individuals requiring precise and sustained drug delivery over an extended period. This formulation ensures a steady release of active ingredients, optimizing therapeutic effects while minimizing side effects. Commonly prescribed for inflammatory conditions, this tablet helps manage symptoms effectively with fewer doses throughout the day, enhancing patient compliance and convenience. The controlled-release mechanism allows for better absorption and utilization by the body, making it a preferred choice for chronic treatments requiring consistent blood levels of medication.",
      image: "https://www.netmeds.com/images/product-v1/600x600/1087185/budenofil_9_tablet_10s_546702_0_0.jpg",
      slug: "budaren-9-tablet-cr"
    },
    {
      name: "Concitor 100 Tablet",
      description: "Concitor 100 Tablet is a highly effective prescription medication formulated to support cardiovascular health. It plays a crucial role in maintaining optimal heart function by regulating blood pressure, reducing strain on the heart, and preventing complications such as heart attacks and strokes. Doctors often prescribe this medication for individuals with hypertension or other cardiac-related issues, as it helps stabilize the circulatory system and improve overall cardiac performance. By promoting proper blood flow and reducing arterial stiffness, Concitor 100 enhances heart efficiency and contributes to a healthier cardiovascular system.",
      image: "https://cdn01.pharmeasy.in/dam/products/I40947/concitor-100mg-tablets-10s-1-1663683803.jpg?dim=320x320&dpr=1&q=100",
      slug: "concitor-100-tablet"
    },
    {
      name: "Ketoneph Tablet",
      description: "Ketoneph Tablet is specifically designed to support kidney health and metabolic balance in individuals with renal concerns. This supplement aids in maintaining optimal kidney function by helping regulate electrolyte levels, reducing oxidative stress, and promoting proper filtration processes. It is often recommended for individuals at risk of kidney disease or those undergoing treatment for renal dysfunction. By providing essential nutrients and supporting metabolic processes, Ketoneph Tablet contributes to the overall well-being of patients by enhancing kidney performance and preventing further deterioration.",
      image: "https://www.netmeds.com/images/product-v1/600x600/1057316/ketoneph_tablet_10s_453559_0_0.jpg",
      slug: "ketoneph-tablet"
    },
    {
      name: "Linacord-M 2.5/500 Tablet",
      description: "Linacord-M 2.5/500 Tablet is a dual-action medication designed to help individuals manage their blood sugar levels effectively. It combines two essential active ingredients that work synergistically to regulate glucose metabolism and enhance insulin sensitivity. This makes it an ideal treatment option for patients with type 2 diabetes, as it assists in maintaining stable blood sugar levels throughout the day. Regular use of Linacord-M can lead to improved glycemic control, reduced risk of complications, and better overall health in diabetic individuals, making it a crucial part of diabetes management.",
      image: "https://zenerics.gumlet.io/wp-content/uploads/2023/05/Indiamart-2023-06-06T125757.631.png?compress=true&quality=80&w=576&dpr=1",
      slug: "linacord-m-2-5-500-tablet"
    },
    {
      name: "Renomeg Forte Capsule",
      description: "Renomeg Forte Capsule is a premium dietary supplement formulated to promote optimal renal function and overall kidney health. This powerful blend of essential vitamins, minerals, and antioxidants works to reduce kidney inflammation, support detoxification, and enhance urinary function. It is especially beneficial for individuals suffering from chronic kidney conditions or those looking to maintain long-term kidney health. By improving filtration efficiency and reducing oxidative stress, Renomeg Forte helps prevent kidney damage and supports a healthy urinary system, making it a valuable addition to a renal care regimen.",
      image: "https://cdn01.pharmeasy.in/dam/products/I03743/renomega-forte-strip-of-10-capsules-1-1641535864.jpg?dim=320x320&dpr=1&q=100",
      slug: "renomeg-forte-capsule"
    },
    {
      name: "Renopride 1 Tablet",
      description: "Renopride 1 Tablet is a specialized pharmaceutical formulation designed to enhance gastrointestinal motility, helping individuals who suffer from digestive disorders such as gastroparesis and chronic constipation. By stimulating the smooth muscles of the gastrointestinal tract, it facilitates improved digestion and prevents issues like bloating, acid reflux, and nausea. This medication is often prescribed to patients who experience delayed gastric emptying, ensuring that food moves more efficiently through the digestive system. Additionally, it plays a crucial role in alleviating discomfort associated with indigestion and irregular bowel movements, thereby improving overall digestive health and promoting a better quality of life.",
      image: "https://images.apollo247.in/pub/media/catalog/product/N/E/NEO0192_1_1.jpg?tr=w-264,q-80,f-webp,dpr-false,c-at_max",
      slug: "renopride-1-tablet"
    },
    {
      name: "Sodicarb-Forte Tablet EC",
      description: "Sodicarb-Forte Tablet EC is an enteric-coated pharmaceutical formulation developed to address metabolic alkalosis and related electrolyte imbalances. This medication plays an essential role in maintaining the body's pH balance, especially for patients suffering from chronic kidney disease, respiratory conditions, or metabolic disorders that lead to excessive loss of acid from the bloodstream. The enteric coating ensures that the active ingredients are released in a controlled manner, optimizing absorption and minimizing gastrointestinal irritation. By replenishing bicarbonate levels in the body, it helps restore electrolyte equilibrium and supports normal metabolic functions, making it a vital part of treatment regimens for patients dealing with acid-base imbalances.",
      image: "https://cdn01.pharmeasy.in/dam/products/I01914/sodicarb-1000mg-forte-tab-10s-1-1654072866.jpg?dim=320x320&dpr=1&q=100",
      slug: "sodicarb-forte-tablet-ec"
    },
    {
      name: "Conciphos Tablet",
      description: "Conciphos Tablet is a high-quality phosphate supplement that plays a critical role in supporting bone mineralization and overall skeletal health. Designed for individuals with phosphate deficiencies, osteoporosis, or conditions that impact bone density, this supplement ensures an adequate supply of phosphate to promote strong and healthy bones. Phosphate is essential for energy production, cellular function, and maintaining the structural integrity of bones and teeth. By supplementing the body's phosphate levels, Conciphos Tablet helps prevent bone loss, reduces the risk of fractures, and supports overall musculoskeletal health. It is particularly beneficial for individuals with chronic kidney disease, where phosphate imbalances are common and require careful management.",
      image: "https://magicpills.in/wp-content/uploads/2019/05/CONCIPHOS-667MG-TAB.jpg",
      slug: "conciphos-tablet"
    },
    {
      name: "Dapacord 10 Tablet",
      description: "Dapacord 10 Tablet is a powerful prescription medication used for managing type 2 diabetes by helping to regulate blood sugar levels. It works by inhibiting the sodium-glucose co-transporter 2 (SGLT2) in the kidneys, reducing glucose reabsorption and promoting its excretion through urine. This mechanism not only lowers blood sugar levels but also contributes to weight management and cardiovascular health. The tablet is often prescribed as part of a comprehensive diabetes treatment plan, which includes diet and exercise, to ensure optimal glycemic control. It is particularly beneficial for patients looking for an effective solution to prevent complications arising from high blood sugar levels while maintaining a balanced and healthy lifestyle.",
      image: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-079083/dapakart-10-tablet-10_dapakart-10-tablet-10--TM-TACR1-079083_1.png?width=320",
      slug: "dapacord-10-tablet"
    },
    {
      name: "Linacord-D 5/10 Tablet",
      description: "Linacord-D 5/10 Tablet is a dual-component medication specifically designed for effective hypertension management. This combination tablet contains two active ingredients that work synergistically to regulate blood pressure and improve cardiovascular health. It is prescribed for individuals who struggle with high blood pressure, reducing their risk of heart attack, stroke, and other complications. By promoting better blood circulation and lowering the strain on blood vessels, this medication ensures long-term cardiovascular stability. Its dual-action formulation makes it an ideal choice for patients who require comprehensive blood pressure control while minimizing side effects and ensuring a steady therapeutic response.",
      image: "https://www.netmeds.com/images/product-v1/600x600/1124037/linaxa_d_5_10_tablet_10s_700785_0_0.jpg",
      slug: "linacord-d-5-10-tablet"
    },
    {
      name: "Probineph 45 Capsule",
      description: "Probineph 45 Capsule is a specialized nephroprotective supplement designed to support kidney function and overall renal health. This formulation contains essential nutrients and compounds that help in maintaining optimal kidney performance, reducing oxidative stress, and supporting the body's natural detoxification processes. Ideal for individuals with compromised kidney function or those looking to enhance renal wellness, Probineph 45 aids in preventing the progression of kidney-related complications while promoting proper filtration and waste elimination.",
      image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/983da33a0f9140fe8d3086f405bd4296.jpg",
      slug: "probineph-45-capsule"
    },
    {
      name: "Renomune-S Tablet DR",
      description: "Renomune-S Tablet DR is a delayed-release immune-boosting formulation designed to enhance immune response and provide cellular protection. This advanced supplement contains vital antioxidants, essential vitamins, and minerals that work synergistically to strengthen the immune system, reduce inflammation, and promote better overall health. With its delayed-release mechanism, Renomune-S ensures a sustained effect, allowing for prolonged absorption and maximum benefit to the body, particularly in individuals seeking to fortify their immune defenses against infections and environmental stressors.",
      image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/085f8a18920f48f38a56737b24cd2cbb.jpg?dpr=2&format=auto",
      slug: "renomune-s-tablet-dr"
    },
    {
      name: "Renopride 2 Tablet",
      description: "Renopride 2 Tablet is an advanced gastrointestinal motility enhancer, specifically formulated to support digestive health by stimulating the natural movement of the intestines. This medication is particularly beneficial for individuals experiencing slow gastric emptying, bloating, and other motility disorders. By improving gut function and facilitating smoother digestion, Renopride 2 Tablet helps relieve discomfort associated with conditions such as gastroesophageal reflux disease (GERD) and functional dyspepsia, making it an essential component in gastrointestinal health management.",
      image: "https://images.apollo247.in/pub/media/catalog/product/N/E/NEO0192_1_1.jpg?tr=w-264,q-80,f-webp,dpr-1,c-at_max",
      slug: "renopride-2-tablet"
    },
    {
      "name": "Trolci Soft Gelatin Capsule",
      "description": "Trolci Soft Gelatin Capsule is a highly effective calcium supplement designed to support bone strength and overall skeletal health. This formulation is particularly beneficial for individuals suffering from osteoporosis, osteopenia, or general calcium deficiency. Calcium plays a crucial role in maintaining the structural integrity of bones and teeth, preventing conditions like fractures, bone loss, and weakened joints. This supplement is also essential for post-menopausal women, older adults, and individuals with conditions that lead to reduced calcium absorption, such as chronic kidney disease or certain gastrointestinal disorders. Each soft gelatin capsule contains an optimized dose of calcium along with vitamin D, which enhances calcium absorption in the body. Regular use of this supplement can help prevent conditions such as rickets, brittle bones, and age-related bone density loss. It is recommended for individuals who do not get enough calcium through their diet or those with increased calcium needs, such as pregnant or lactating women. To maximize the benefits, it is advised to take the capsule with meals for optimal absorption. Always consult a healthcare professional before starting a calcium supplement to ensure it aligns with your dietary and medical needs.",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/8f0caffdce1a493ab1438669b55bfbeb.jpg",
      "slug": "trolci-soft-gelatin-capsule"
    },
    {
      "name": "Calcineph Tablet",
      "description": "Calcineph Tablet is a specialized calcium supplement formulated for individuals with kidney-related health conditions. Patients suffering from chronic kidney disease (CKD) often face imbalances in calcium and phosphorus levels, leading to weakened bones and an increased risk of fractures. This tablet is designed to provide a bioavailable form of calcium that supports bone mineral density while also helping to regulate electrolyte levels. The formulation is particularly beneficial for individuals undergoing dialysis, as it helps prevent conditions like renal osteodystrophy—a bone disorder common in kidney disease patients. Additionally, it may help reduce secondary hyperparathyroidism, a condition where the parathyroid glands overproduce hormones in response to low calcium levels. Regular use of Calcineph Tablet can improve overall bone health, reduce the risk of osteoporosis, and support metabolic balance in individuals with compromised kidney function. It is recommended to take the tablet as per a healthcare provider's instructions, preferably with meals, to enhance absorption. If you have kidney disease, it is crucial to monitor calcium intake under medical supervision to avoid complications such as hypercalcemia (excess calcium in the blood).",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/nbjizgd7egwt7isvkv1h.jpg",
      "slug": "calcineph-tablet"
    },
    {
      "name": "Concitor 40 Tablet",
      "description": "Concitor 40 Tablet is a cardiovascular support medication specifically formulated to help individuals manage high blood pressure, heart conditions, and overall cardiovascular health. This medication belongs to a class of drugs known as beta-blockers, which work by reducing the heart's workload and slowing down heart rate, ultimately lowering blood pressure. It is particularly effective in patients with hypertension, angina (chest pain), and certain heart rhythm disorders. Concitor 40 Tablet can also be prescribed after a heart attack to reduce the risk of future cardiac events. It helps prevent complications such as heart failure, stroke, and kidney problems by maintaining optimal blood pressure levels. Regular use under medical supervision ensures that the heart functions efficiently without unnecessary strain. The tablet may also benefit individuals with anxiety-related palpitations by stabilizing heart rhythms. It is recommended to take the medication at the same time each day to maintain consistency in blood pressure control. As with all medications, it is crucial to follow the prescribed dosage and avoid abrupt discontinuation, as stopping beta-blockers suddenly can lead to withdrawal effects, including increased heart rate and elevated blood pressure.",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/xlhwxsdstowtq5y5wgje.jpg",
      "slug": "concitor-40-tablet"
    },
    {
      "name": "Feren Tablet",
      "description": "Feren Tablet is an advanced iron supplement formulated to combat iron deficiency anemia and associated symptoms such as fatigue, weakness, and dizziness. It plays a crucial role in improving hemoglobin levels, ensuring optimal oxygen transport throughout the body. This tablet is particularly beneficial for individuals suffering from chronic illnesses, post-surgery recovery, heavy menstrual bleeding, or dietary iron deficiencies. It also aids in red blood cell production, boosting energy levels and preventing complications such as pale skin, brittle nails, and cognitive sluggishness. Feren Tablet is recommended for pregnant women, lactating mothers, and individuals following vegetarian or restrictive diets to maintain adequate iron levels. For maximum absorption, it is best taken with vitamin C-rich foods or beverages while avoiding calcium-rich foods that may hinder its effectiveness. Consultation with a healthcare professional is advised before beginning supplementation, especially for individuals with underlying medical conditions.",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/02aaaab5f0384d088743c9b7c0a390f4.jpg",
      "slug": "feren-tablet"
    },
    {
      "name": "Megesta 160 Tablet",
      "description": "Megesta 160 Tablet is a hormonal therapy medication primarily used for treating hormone-related conditions such as endometrial cancer, appetite stimulation, and menstrual irregularities. It contains megestrol acetate, a synthetic progestin that mimics the effects of natural progesterone in the body. This tablet is widely prescribed in cancer management, particularly for hormone-sensitive cancers like endometrial and breast cancer. It is also used in patients with significant weight loss due to conditions such as HIV/AIDS, cancer, or chronic illnesses, as it helps boost appetite and improve weight gain. Additionally, Megesta 160 Tablet is sometimes recommended to manage irregular menstrual cycles, premenstrual syndrome (PMS), and hormone imbalances. Due to its potential side effects, including fluid retention, mood changes, and metabolic alterations, this medication should only be taken under the supervision of a healthcare provider. Regular monitoring is necessary to assess its effectiveness and minimize risks.",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/5a3a3cd0f14646a68ad3048c0dfc9823.jpg?dpr=2&format=auto",
      "slug": "megesta-160-tablet"
    },
    {
      "name": "Renomega Soft Gelatin Capsule",
      "description": "Renomega Soft Gelatin Capsule is a high-quality omega-3 fatty acid supplement specifically designed to promote kidney health and overall well-being. This formulation is enriched with essential fatty acids, including EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid), which are known for their anti-inflammatory properties. It is particularly beneficial for individuals with chronic kidney disease (CKD) as it helps reduce oxidative stress, lower triglyceride levels, and support cardiovascular function. Omega-3 fatty acids also play a role in maintaining healthy blood pressure, reducing the risk of heart disease, and improving cognitive function. Regular use of Renomega Capsules can help manage proteinuria (excess protein in urine), slow the progression of kidney damage, and support joint health by reducing inflammation. It is recommended to take this supplement with meals for better absorption. As with all supplements, it is advisable to consult a healthcare provider before use, especially for individuals taking blood-thinning medications or those with seafood allergies.",
      "image": "https://cdn01.pharmeasy.in/dam/products/I03743/renomega-forte-strip-of-10-capsules-1-1641535864.jpg?dim=320x320&dpr=1&q=100",
      "slug": "renomega-soft-gelatin-capsule"
    },
    {
      "name": "Renotrix Tablet",
      "description": "Renotrix Tablet is a scientifically formulated kidney support supplement designed to enhance renal function, maintain electrolyte balance, and aid in detoxification. It is particularly useful for individuals with chronic kidney disease (CKD), kidney stones, or other renal complications. This tablet contains a blend of essential vitamins, minerals, and herbal extracts that promote kidney filtration, prevent the buildup of harmful toxins, and support urinary tract health. Renotrix is beneficial in reducing fluid retention, balancing sodium and potassium levels, and preventing complications such as nephropathy. It also helps improve overall energy levels by ensuring the kidneys function efficiently. This supplement is recommended for those at risk of kidney disorders due to diabetes, hypertension, or prolonged medication use. As kidney health is critical to overall wellness, it is essential to use this tablet under medical supervision to ensure safety and effectiveness.",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/983da33a0f9140fe8d3086f405bd4296.jpg",
      "slug": "renotrix-tablet"
    },
    {
      "name": "Tobakid Eye Drops",
      "description": "Tobakid Eye Drops is a prescription ophthalmic solution specifically formulated to treat bacterial eye infections and promote eye health. It contains powerful antibiotics that help eliminate harmful bacteria, reducing symptoms such as redness, swelling, itching, and irritation. This eye drop is highly effective in treating conditions such as conjunctivitis (pink eye), keratitis, and bacterial corneal ulcers. Tobakid also provides relief from eye discomfort caused by dust, pollution, and prolonged screen exposure. The fast-acting formula ensures quick relief while preventing the infection from spreading to other parts of the eye. It is essential to follow the prescribed dosage and application method to ensure effective treatment. Contact lenses should be removed before applying the drops, and hands should be thoroughly washed to avoid contamination. In case of persistent irritation, blurred vision, or allergic reactions, immediate medical consultation is advised.",
      "image": "https://cdn01.pharmeasy.in/dam/products/I40947/concitor-100mg-tablets-10s-1-1663683803.jpg?dim=320x320&dpr=1&q=100",
      "slug": "tobakid-eye-drops"
    },
    {
      "name": "Urofit Tablet",
      "description": "Urofit Tablet is a premium urinary tract supplement formulated to support renal health, prevent urinary infections, and promote bladder function. It contains a blend of essential nutrients and herbal extracts that aid in detoxification and the natural elimination of toxins from the urinary system. Urofit is particularly beneficial for individuals prone to urinary tract infections (UTIs), kidney stones, and bladder irritation. The active ingredients work by maintaining pH balance, reducing bacterial growth, and improving urinary flow. This supplement is also useful for individuals experiencing frequent urination, discomfort during urination, or inflammation in the urinary tract. Regular use of Urofit helps strengthen kidney function, improve hydration, and reduce the risk of recurrent infections. It is recommended to stay adequately hydrated while taking this supplement to enhance its effectiveness. Consulting a healthcare provider before use is advisable, especially for individuals with pre-existing kidney conditions.",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/yoya1eidf3mvm0npr53z.jpg",
      "slug": "urofit-tablet"
    },
    {
      "name": "Zilast 10 Tablet",
      "description": "Zilast 10 Tablet is a prescription medication designed to treat respiratory conditions such as asthma, chronic obstructive pulmonary disease (COPD), and other inflammatory airway disorders. It contains bronchodilators and anti-inflammatory agents that work together to relax the airway muscles, reduce inflammation, and improve breathing. This medication is ideal for individuals experiencing shortness of breath, wheezing, and persistent coughing due to respiratory illnesses. It helps prevent asthma attacks, reduces the frequency of COPD exacerbations, and enhances lung function. Zilast 10 is recommended for individuals who require long-term respiratory support to maintain an active and healthy lifestyle. Proper dosage and adherence to medical advice are crucial for maximizing its benefits. Patients using this medication should avoid smoking and exposure to respiratory irritants for better treatment outcomes.",
      "image": "https://www.netmeds.com/images/product-v1/600x600/1087185/budenofil_9_tablet_10s_546702_0_0.jpg",
      "slug": "zilast-10-tablet"
    },
  ];
  
   
  
  // Function to slugify a string

  

  return (
    <div className="w-full bg-[#F2FCF6]">
      {/* Banner Section */}
      <div className="relative h-[160px] sm:h-[400px] bg-cover bg-center mb-8 sm:mb-9">
       {/* <Image
          className="absolute inset-0 z-1 w-full h-full object-cover hidden sm:block"
          src={pharma}
          alt="Homepage Banner"
          priority
        />
        <Image
          className="absolute inset-0 z-1 w-full h-full object-cover sm:hidden"
          src={pharma1}
          alt="Homepage Mobile Banner"
          priority
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-30 hidden sm:block"></div>
        <div className="relative z-10 hidden sm:flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#008080]">
            Pharmaceuticals & Drug Supplies
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-6 text-[#008080]">
            Advancing Health Through Precision & Innovation
          </p>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="relative z-10 block sm:hidden text-center px-4 mt-5 mb-9">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Pharmaceuticals & Drug Supplies
        </h1>
        <p className="text-md font-light text-gray-700">
          Advancing Health Through Precision & Innovation
        </p>
      </div>

      {/* Information Section */}
      <section className="px-10 py-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Advancing Health <br /> Through Precision
              <span className="text-[#009688]">.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              At the forefront of pharmaceutical innovation, we deliver
              high-quality solutions designed to meet the demands of modern
              medicine. Our commitment to safety, efficacy, and cutting-edge
              technology ensures that every product contributes to better health
              outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <StatBox number="2000" label="Exclusive Products" />
            <StatBox number="150" label="Factories" />
            <StatBox number="25" label="Chemistries" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl font-extrabold">
        Our Products
      </h1>
      <ProductList products={products} />
    </div>
  );
}
