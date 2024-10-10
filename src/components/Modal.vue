<script>
import "../assets/modal.css"
export default {
    name: 'modalComponent',
    props: {
        size: {
            type: String,
            default: "default"
        },
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
    <form class="backdrop" @click="handleOutsideClick">
        <div class="modal-bg" :class="size" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <div class="close-btn" @click="closeModal">
                        <i class='bx bxs-x-square'></i>
                    </div>
                    <div class="modal-header" v-if="showHeader">
                        <slot name="header"></slot>
                    </div>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>

                <div class="modal-footer" v-if="showFooter">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </form>
</template>
