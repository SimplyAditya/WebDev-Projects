function showAuthenticatedUI() {
  document.querySelector(".authenticated").style.display = "flex";
  document.querySelector(".unauthenticated").style.display = "none";
}

function showOtherUI() {
  document.querySelector(".authenticated").style.display = "none";
  document.querySelector(".unauthenticated").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("/protected")
        .then(async (res) => {
          const authenticated = await res.json()
            .then((res) => res.authenticated)
          if (authenticated) showAuthenticatedUI()
          else showOtherUI()
        })
        .catch((err) => console.log(err))
})
