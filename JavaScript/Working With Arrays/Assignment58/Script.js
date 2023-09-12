function myFunction() {
  const h2 = document.getElementById("myH2");
  let html = `<div>
               <h5>Footer</h5>
                <p>Footer information goes here</p>
              </div>`;

  h2.insertAdjacentHTML("afterbegin", html);
  // html.style.backgroundColor = "blue";
}
