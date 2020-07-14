<script>import { guestInventory } from '../store/inventory/guests';

  import Items from '../components/inventory/Items.svelte';
  import { housingInventory } from '../store/inventory/housing';
  import { inventory } from '../store/inventory';
  import { onMount, onDestroy } from 'svelte';
  import { form } from '../store';

  onMount(() => {
    inventory.set(housingInventory);
  });

  const subscription = $inventory.selectedCard.subscribe((card) => {
    form.setForm('housing', card);
  });


  onDestroy(() => subscription());
</script>

<Items items={housingInventory.items} />