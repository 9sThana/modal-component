<script>

export default {

}

</script>


<template>
  <button @click="openModal('modal1')">Open modal 1</button>
  <button @click="openModal('modal2')">Open modal 2</button>

  <Modal v-if="activeModal == 'modal1'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is the 1st modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
    </main>


  </Modal>

  <Modal v-if="activeModal == 'modal2'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is the 2nd modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
    </main>

  </Modal>
</template>
