const closeButtons = document.querySelectorAll(".modal");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog){
      dialog.close();
    }
  });
});

const url = new URLSearchParams(window.location.search);

document.querySelector("#applicationInfo").innerHTML = `
    <h2>Application Information</h2>
    <p>Name: ${url.get("firstname")} ${url.get("lastname")}</p>
    <p>Phone: ${url.get("phone")}</p>
    <p>Email: ${url.get("useremail")}</p>
    <p> Fitness Objective: ${url.get("goal")}</p>
`;