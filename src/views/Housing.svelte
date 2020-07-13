<script>
  import Items from '../components/Items.svelte';
  import { cards, hoveredCard, hoveredItem } from '../store/housing';
  import { onMount, onDestroy } from 'svelte';
  import { form, selectedCard } from '../store';

  
  const subscription = selectedCard.subscribe((card) => {
    form.setForm('housing', card);
  });

  onDestroy(() => subscription());
</script>

<Items items={cards} {hoveredItem} {selectedCard}/>