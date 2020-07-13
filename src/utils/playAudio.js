const audios = {
  'item': new Audio('assets/item.mp3'),
  'select': new Audio('assets/select.mp3'),
};


export const playAudio = (name, ext = 'mp3') => {
  audios[name].currentTime = 0;
  audios[name].play();
} 