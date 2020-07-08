
export const playAudio = (name, ext = 'mp3') => {
  let audio = new Audio(`/assets/${name}.${ext}`);
  // let audio = new Audio(`/wedding-svelte/assets/${name}.${ext}`);
  audio.play().then(() => {
    audio = null;
  });
}