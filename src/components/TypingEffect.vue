<template>
  <div>
    <span ref="typed"></span>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'TypingEffect',
  props: {
    strings: {
      type: Array,
      required: true,
    },
    typeSpeed: {
      type: Number,
      default: 50,
    },
    backSpeed: {
      type: Number,
      default: 50,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const options = {
      strings: this.strings,
      typeSpeed: this.typeSpeed,
      backSpeed: this.backSpeed,
      loop: this.loop,
    };

    new Typed(this.$refs.typed, options);
  },
};
</script>
