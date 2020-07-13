<script>
  import { cards, hoveredCard, hoveredItem } from '../store/guests';
  import { onMount, onDestroy } from 'svelte';
  import { form, selectedCard } from '../store';

  import Items from '../components/Items.svelte';

  const subscription = selectedCard.subscribe((card) => {
    form.setForm('guest', card);
  });

  onDestroy(() => subscription());
</script>

<Items items={cards} {hoveredItem} {selectedCard} />