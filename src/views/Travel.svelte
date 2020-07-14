<script>
  import Items from '../components/inventory/Items.svelte';
  import { travelInventory } from '../store/inventory/travel';
  import { inventory } from '../store/inventory';
  import { onMount, onDestroy } from 'svelte';
  import { form } from '../store';

  let subscription = null;
  inventory.set(travelInventory);

  onMount(() => {
    subscription = $inventory.selectedCard.subscribe((card) => {
      form.setForm('travel', card);
    });
  });

  onDestroy(() => subscription());
</script>

<Items items={travelInventory.items} />