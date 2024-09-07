export function loadContact(){
  const button1 = document.getElementById("1button");
  const button2 = document.getElementById("2button");
  const button3 = document.getElementById("3button");

  const content = document.getElementById("content");

  // @ts-ignore
  button1.style.color = `white`;
  // @ts-ignore
  button2.style.color = `white`;
  // @ts-ignore
  button3.style.color = `rgb(234, 179, 62)`;

console.log("tu as bien généré la page de contact")


  // @ts-ignore
  content.innerHTML = `<div
        style="width: 100%; height: 100vh; background-color: rgb(234, 179, 62)"
      >
        <h2
          style="
            text-align: center;
            color: white;
            padding-top: 100px;
            font-size: 50px;
          "
        >
          Nous contacter
        </h2>
        <hr style="width: 200px; margin: auto; border-color: black" />

        <div
          style="
            width: 60%;
            height: auto;
            margin: auto;
            background-color: rgb(87, 99, 146);
            margin-top: 50px;
            border-radius: 1rem;
            display: flex;
            flex-direction: row;
            padding-top: 30px;
            padding-bottom: 30px;
            justify-content:space-around;
          "
        >
          <div style="color: white; font-size: 30px;padding-top: 50px;">
            <p>Adresse : </p>
            
            <p>28 rue du maréchal petain </p>
            <hr style="width: 150px;border-color: black;">
            <p>Phone : 06 57 48 37 59</p>
            <hr style="width: 150px;border-color: black;">
            <p>eatsandfish@gmail.com</p>
            
          </div>

          <div style="padding-right: 40px;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2624.4857160667802!2d2.3407410768469195!3d48.868016500028496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDUyJzA0LjkiTiAywrAyMCczNS45IkU!5e0!3m2!1sfr!2sfr!4v1725646085941!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen="yes"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>`




}

