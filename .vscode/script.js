function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  const body = document.querySelector("#profile img")
  if (body.documentbody.contains("./assets/Avatar.png")) {
    document.body.setAttribute(
      "alt",
      "Foto de Mayke Brito sorrindo, usando óculos e camisa preta, barba e fundo azul",
    )
  } else {
    document.body.setAttribute(
      "alt",
      "Foto de mayke Brito sorrindo, usando óculos escuros e camisa preta, barba e fundo azul",
    )
  }
}
