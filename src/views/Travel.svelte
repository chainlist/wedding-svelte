<script>
  import Items from '../components/Items.svelte';
  import { cards, hoveredCard, hoveredItem } from '../store/travel';
  import { onMount, onDestroy } from 'svelte';
  import { form, selectedCard } from '../store';

  
  const subscription = selectedCard.subscribe((card) => {
    form.setForm('travel', card);
  });

  onDestroy(() => subscription());
</script>

<Items items={cards} {hoveredItem} {selectedCard}/>