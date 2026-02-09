// // Script para asegurar que la página comience desde arriba
// if (typeof window !== "undefined") {
//   // Desactivar la restauración automática del scroll
//   if (history.scrollRestoration) {
//     history.scrollRestoration = "manual"
//   }

//   // Forzar el scroll a la parte superior
//   window.scrollTo(0, 0)

//   // Asegurar que el scroll se resetea incluso después de que la página termine de cargar
//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       window.scrollTo(0, 0)
//     }, 0)
//   })
// }
// // 