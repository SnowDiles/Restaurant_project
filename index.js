function loadIndex(){
  const button = document.getElementById("1button");
  const content = document.getElementById("content");

  // @ts-ignore
  button.style.color = `rgb(234, 179, 62)`;


  
  // @ts-ignore
  content.innerHTML = `<div
        style="
          width: 30%;
          height: auto;
          padding-bottom: 40px;
          background-color: rgb(67, 81, 138);
          margin: auto;
          position:relative;
          top:200px;
          border-radius: 2rem;
        "
      >
        <p
          style="
            color: rgb(234, 179, 62);
            padding-top: 30px;
            font-size: 23px;
            padding-left: 10px;
            padding-bottom: 20px;
          "
        >
          Fish and Eats un restaurant pour tous les gouts
        </p>
        <hr style="width: 60%; margin: auto" />
        <p
          style="
            color: white;
            width: 60%;
            text-overflow: scroll;
            border: white solid 1px;
            margin: auto;
            background-color: rgb(87, 99, 146);
            padding: 10px;
            border-radius: 2rem;
            margin-top: 20px;
            padding-bottom: 30px;
          "
        >
          Bienvenue chez Fish and Eats, où la fraîcheur de la mer rencontre des
          saveurs gourmandes. Découvrez des plats créatifs et savoureux,
          préparés avec passion pour sublimer les produits de la mer. Une
          expérience culinaire qui vous fera voyager à chaque bouchée !
          <button
            style="
              margin-left: 10px;
              margin-top: 10px;
              padding: 7px;
              border-radius: 1rem;
              box-shadow: 5px 2px 0px 0px black;
            "
          >
            Réserver
          </button>
        </p>
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

loadIndex();
console.log("test");


