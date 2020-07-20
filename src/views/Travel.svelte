<script>
  import Items from '../components/inventory/Items.svelte';
  import { travelInventory } from '../store/inventory/travel';
  import { inventory } from '../store/inventory';
  import { onMount, onDestroy } from 'svelte';

  let subscription = null;
  inventory.set(travelInventory);

</script>

<Items items={travelInventory.items} />