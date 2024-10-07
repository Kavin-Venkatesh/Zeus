<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal" @keydown.esc="closeModal" tabindex="0">
    <div class="modal-content" :style="{ width: customWidth, height: customHeight }" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <span class="close-button" @click="closeModal">&times;</span>
      <header v-if="$slots.header" class="modal-header">
        <slot name="header"></slot>
      </header>
      <main class="modal-body">
        <slot name="body"></slot>
      </main>
      <footer v-if="$slots.footer" class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserModal',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    customWidth: {
            type: String,
            default: '900px'
    },
    customHeight: {
          type: String,
          default: '550px'
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  mounted() {
    if (this.isVisible) {
      this.$el.focus();
    }
  },
  watch: {
    isVisible(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$el.focus();
        });
      }
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

.modal-content {
  background: #08080B;
  color: #D4D4D7;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 70vw;
  max-width: 900px;
  max-height: 1000px;
  outline: none;
}
.modal-body {
    padding: 10px;
    flex: 1;
    height: auto;
    overflow: hidden;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-header,
.modal-footer {
  padding: 5px 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}
</style>