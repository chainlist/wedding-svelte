<script>
  import { guestInventory } from '../store/inventory/guests';
  import { inventory } from '../store/inventory';
  import { onMount, onDestroy } from 'svelte';

  import Items from '../components/inventory/Items.svelte';

  inventory.set(guestInventory);
</script>

<Items items={guestInventory.items} />