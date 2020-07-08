<script>
import Writting from './Writting.svelte';
import { selectedCard } from '../store/index';

let t = 'qzdqzd';

var textArray = [
    'song1.ogg',
    'song2.ogg'
];

selectedCard.subscribe(() => {
  var randomNumber = Math.floor(Math.random()*textArray.length);
  t = textArray[randomNumber];
})

</script>

<Writting text={t}/>