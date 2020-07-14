<script>
  import { guestInventory } from '../store/inventory/guests';
  import { inventory } from '../store/inventory';
  import { onMount, onDestroy } from 'svelte';
  import { form } from '../store';

  import Items from '../components/inventory/Items.svelte';

  let subscription = null;

  inventory.set(guestInventory);
  
  onMount(() => {
    subscription = $inventory.selectedCard.subscribe((card) => {
      form.setForm('guest', card);
    });
  });

  onDestroy(() => subscription());
</script>

<Items items={guestInventory.items} />