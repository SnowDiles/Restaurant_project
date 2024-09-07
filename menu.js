// export function loadMenu(){
//   const button1 = document.getElementById("1button");
//   const button2 = document.getElementById("2button");
//   const button3 = document.getElementById("3button");
//   const content = document.getElementById("content");

//   // @ts-ignore
//   button1.style.color = `white`;
//   // @ts-ignore
//   button2.style.color = `rgb(234, 179, 62)`;
//   // @ts-ignore
//   button3.style.color = `white`;

//   console.log("le menu a bien été chargé");


  
//   // @ts-ignore
//   content.innerHTML = `<div
//         style="
//           width: 30%;
//           height: auto;
//           padding-bottom: 40px;
//           background-color: rgb(67, 81, 138);
//           margin: auto;
//           position:relative;
//           top:200px;
//           border-radius: 2rem;
//         "
//       >
//         <p
//           style="
//             color: rgb(234, 179, 62);
//             padding-top: 30px;
//             font-size: 23px;
//             padding-left: 10px;
//             padding-bottom: 20px;
//           "
//         >
//           Fish and Eats un restaurant pour tous les gouts
//         </p>
//         <hr style="width: 60%; margin: auto" />
//         <p
//           style="
//             color: white;
//             width: 60%;
//             text-overflow: scroll;
//             border: white solid 1px;
//             margin: auto;
//             background-color: rgb(87, 99, 146);
//             padding: 10px;
//             border-radius: 2rem;
//             margin-top: 20px;
//             padding-bottom: 30px;
//           "
//         >
//           Bienvenue chez Fish and Eats, où la fraîcheur de la mer rencontre des
//           saveurs gourmandes. Découvrez des plats créatifs et savoureux,
//           préparés avec passion pour sublimer les produits de la mer. Une
//           expérience culinaire qui vous fera voyager à chaque bouchée !
//           <button
//             style="
//               margin-left: 10px;
//               margin-top: 10px;
//               padding: 7px;
//               border-radius: 1rem;
//               box-shadow: 5px 2px 0px 0px black;
//             "
//           >
//             Réserver
//           </button>
//         </p>
//       </div>`;





// }


export function loadMenu(){
  const button1 = document.getElementById("1button");
  const button2 = document.getElementById("2button");
  const button3 = document.getElementById("3button");

  const content = document.getElementById("content");

  // @ts-ignore
  button1.style.color = `white`;
  // @ts-ignore
  button2.style.color = `rgb(234, 179, 62)`;
  // @ts-ignore
  button3.style.color = `white`;


  
  // @ts-ignore
  content.innerHTML = `<div
    style="
      width: 100%;
      height: 150vh;
      background-color: rgb(234, 179, 62);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    "
  >
    <div
      class="menuContain"
      style="
        width: 40%;
        text-align: center;
        margin: auto;
        background-color: rgb(149, 222, 246);
        position: relative;
        border-radius: 1.5rem;
        padding: 40px 30px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      "
    >
      <h1 style="font-size: 36px; margin-bottom: 20px;">Notre Carte</h1>
      <hr
        style="
          border-color: blue;
          width: 40%;
          margin: 0 auto;
          margin-bottom: 30px;
          border-width: 2px;
        "
      />

      <h2 style="font-size: 28px; margin-bottom: 15px;">Nos plats</h2>
      <div style="text-align: left; margin-bottom: 30px;">
        <p style="font-size: 18px; margin: 8px 0;">Filet de saumon grillé <strong style="color: rgb(234, 179, 62); float: right;">25 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Cabillaud à la vapeur <strong style="color: rgb(234, 179, 62); float: right;">22 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Dorade royale au four <strong style="color: rgb(234, 179, 62); float: right;">28 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Brochettes de crevettes <strong style="color: rgb(234, 179, 62); float: right;">20 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Thon mi-cuit au sésame <strong style="color: rgb(234, 179, 62); float: right;">30 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Risotto aux fruits de mer <strong style="color: rgb(234, 179, 62); float: right;">26 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Loup de mer grillé <strong style="color: rgb(234, 179, 62); float: right;">32 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Sole meunière <strong style="color: rgb(234, 179, 62); float: right;">35 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Calamars frits <strong style="color: rgb(234, 179, 62); float: right;">18 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Paella aux fruits de mer <strong style="color: rgb(234, 179, 62); float: right;">24 euros</strong></p>
      </div>

      <h2 style="font-size: 28px; margin-bottom: 15px;">Nos boissons</h2>
      <div style="text-align: left; margin-bottom: 30px;">
        <p style="font-size: 18px; margin: 8px 0;">Cocktail maison <strong style="color: rgb(234, 179, 62); float: right;">8 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Vin blanc sec <strong style="color: rgb(234, 179, 62); float: right;">6 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Bière artisanale <strong style="color: rgb(234, 179, 62); float: right;">5 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Soda <strong style="color: rgb(234, 179, 62); float: right;">3 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Eau minérale <strong style="color: rgb(234, 179, 62); float: right;">2 euros</strong></p>
      </div>

      <h2 style="font-size: 28px; margin-bottom: 15px;">Nos desserts</h2>
      <div style="text-align: left;">
        <p style="font-size: 18px; margin: 8px 0;">Tarte aux pommes maison <strong style="color: rgb(234, 179, 62); float: right;">7 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Mousse au chocolat <strong style="color: rgb(234, 179, 62); float: right;">6 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Crème brûlée <strong style="color: rgb(234, 179, 62); float: right;">7 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Sorbets aux fruits <strong style="color: rgb(234, 179, 62); float: right;">5 euros</strong></p>
        <p style="font-size: 18px; margin: 8px 0;">Profiteroles <strong style="color: rgb(234, 179, 62); float: right;">8 euros</strong></p>
      </div>
    </div>
  </div>`;
  
  
  // @ts-ignore
  content.style.width = "100%";
  // @ts-ignore
  content.style.backgroundColor = "grey";
  // @ts-ignore
  content.style.height = "100vh";
  // @ts-ignore
  content.style.background = "url(images/homeImage.jpg)";
  // @ts-ignore
  content.style.backgroundPositionY = "center";

  console.log("The index have been charged correctly");

}

