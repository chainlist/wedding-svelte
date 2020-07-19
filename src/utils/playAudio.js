const audios = {
  'item': new Audio('assets/item.mp3'),
  'select': new Audio('assets/select.mp3'),
  'open': new Audio('assets/open.mp3'),
  'close': new Audio('assets/select.mp3'),
};


export const playAudio = (name, ext = 'mp3') => {
  audios[name].currentTime = 0;
  audios[name].play();
} 