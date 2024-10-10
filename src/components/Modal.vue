<script>
import "../assets/modal.css"
export default {
    name: 'modalComponent',
    props: {
        showHeader: {
            type: Boolean,
            default: true
        },
        showFooter: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleOutsideClick() {
            this.closeModal();
        }
    }

}
</script>

<template>
    <div class="backdrop" @click="handleOutsideClick">
        <div class="modal-bg" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <div class="close-btn" @click="closeModal">
                        <i class='bx bxs-x-square'></i>
                    </div>
                    <div class="modal-header" v-if="showHeader">
                        <slot name="modal_title"></slot>
                    </div>
                </div>
                <div class="modal-body">
                    <slot name="modal_body"></slot>
                </div>

                <div class="modal-footer" v-if="showFooter">
                    <slot name="modal_footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
