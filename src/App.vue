<template>
  <v-app>
      <Calculadora/>
  </v-app>
</template>

<script>
import Calculadora from './components/calculadora/Calculadora';

export default {
  name: 'App',

  components: {
    Calculadora,
  },

  data: () => ({
    //
  }),
};
</script>
