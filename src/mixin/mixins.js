export const modalMixin = {
  data() {
    return {
      isModalOpen: false,
      activeModal: "",
    };
  },
  methods: {
    openModal(modalName = null) {
      this.isModalOpen = true;
      this.activeModal = modalName;
    },
    closeModal() {
      this.isModalOpen = false;
      this.activeModal = null;
    },
  },
};
